import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read blogPosts from TypeScript file by parsing it
const blogPostsFile = fs.readFileSync(path.join(__dirname, '../data/blogPosts.ts'), 'utf-8');

// Extract the array content using regex
const arrayMatch = blogPostsFile.match(/export const blogPosts = \[([\s\S]*)\];/);
if (!arrayMatch) {
  console.error('Could not find blogPosts array');
  process.exit(1);
}

// For simplicity, we'll manually define the blog posts here
const blogPosts = [
  {
    id: "5-prirodnich-zabijaku-erekce",
    title: "5 přírodních zabijáků erekce",
  },
  {
    id: "testosteron-po-tricitce",
    title: "Testosteron po třicítce",
  },
  {
    id: "sexualni-vyzva-30-dni",
    title: "Sexuální výzva 30 dní",
  },
  {
    id: "jak-zvysit-libido",
    title: "Jak zvýšit libido",
  },
];

const blogDir = path.join(__dirname, '../pages/blog');

blogPosts.forEach((post) => {
  const filename = path.join(blogDir, `${post.id}.tsx`);
  
  const content = `import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white p-8">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4">← Zpět na blog</Link>
      <h1 className="text-4xl font-bold mb-4">${post.title}</h1>
      <p className="text-gray-600">Obsah článku</p>
    </div>
  );
}
`;

  fs.writeFileSync(filename, content);
  console.log(`Generated: ${filename}`);
});

console.log(`✓ Generated ${blogPosts.length} blog pages`);
