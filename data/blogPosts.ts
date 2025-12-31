export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  faq?: { question: string; answer: string }[];
  sources?: string[];
  relatedIds?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Jak zlepšit erekci přirozenou cestou?",
    excerpt: "Objevte osvědčené metody a změny životního stylu, které mohou pozitivně ovlivnit vaši erekci bez nutnosti léků na předpis.",
    content: "...",
    date: "12. 10. 2023",
    author: "MUDr. Jan Novák",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    category: "Zdraví",
    slug: "jak-zlepsit-erekci"
  },
  {
    id: "2",
    title: "Proč klesá libido s věkem?",
    excerpt: "Hormonální změny jsou přirozenou součástí stárnutí. Zjistěte, jak se s nimi vyrovnat a udržet si sexuální vitalitu.",
    content: "...",
    date: "25. 11. 2023",
    author: "MUDr. Petr Svoboda",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop",
    category: "Vzdělávání",
    slug: "pokles-libida-vek"
  },
  {
    id: "3",
    title: "Vliv stresu na sexuální výkonnost",
    excerpt: "Stres je jedním z hlavních zabijáků erekce. Naučte se techniky, jak ho zvládat a zlepšit svůj sexuální život.",
    content: "...",
    date: "05. 12. 2023",
    author: "Mgr. Jana Dvořáková",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?q=80&w=2099&auto=format&fit=crop",
    category: "Psychologie",
    slug: "vliv-stresu-na-erekci"
  }
];
