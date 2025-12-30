"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  mobile?: boolean;
}

export function TableOfContents({ mobile = false }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Find all h2 and h3 elements in the article content
    const elements = Array.from(document.querySelectorAll(".prose h2, .prose h3"));
    
    const items: TOCItem[] = elements.map((element, index) => {
      // Generate an ID if one doesn't exist
      if (!element.id) {
        element.id = `heading-${index}`;
      }
      
      return {
        id: element.id,
        text: element.textContent || "",
        level: Number(element.tagName.substring(1))
      };
    });

    setHeadings(items);

    // Setup intersection observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      if (mobile) {
        setIsOpen(false);
      }
    }
  };

  if (mobile) {
    return (
      <div className="lg:hidden mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2 text-[#2A2A5A] font-bold">
              <List className="w-5 h-5 text-[#D32F2F]" />
              <span>Obsah článku</span>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-slate-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-500" />
            )}
          </button>
          
          {isOpen && (
            <nav className="flex flex-col gap-2 p-4 border-t border-slate-100">
              {headings.map((heading) => (
                <button
                  key={heading.id}
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left text-sm py-1 transition-colors duration-200 hover:text-[#D32F2F] ${
                    activeId === heading.id
                      ? "text-[#D32F2F] font-bold"
                      : "text-slate-600"
                  } ${heading.level === 3 ? "pl-4" : ""}`}
                >
                  {heading.text}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block sticky top-32 ml-8 w-64">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4 text-[#2A2A5A] font-bold border-b border-slate-100 pb-2">
          <List className="w-5 h-5 text-[#D32F2F]" />
          <span>Obsah článku</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`text-left text-sm transition-colors duration-200 hover:text-[#D32F2F] ${
                activeId === heading.id
                  ? "text-[#D32F2F] font-bold"
                  : "text-slate-600"
              } ${heading.level === 3 ? "pl-4" : ""}`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
