import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Blog posts data (mirrored from BlogListing.tsx for simplicity in this script)
// In a real app, this would be fetched from a CMS or shared data file
const blogPosts = [
  "5-prirodnich-zabijaku-erekce",
  "testosteron-po-tricitce",
  "kotvicnik-zemni-zazrak-nebo-mytus",
  "erekce-vs-psychika",
  "top-7-potravin-pro-pevnou-erekci",
  "jak-stres-v-praci-zabiji-vas-sexlife",
  "kegelovy-cviky-pro-muze",
  "afrodiziaka-ktera-skutecne-funguji",
  "ranni-erekce-co-vam-rika",
  "recenze-doplnku-stravy-na-erekci"
];

const DOMAIN = 'https://silnelibido.cz';

const staticPages = [
  '',
  '/recenze',
  '/blog'
];

function generateSitemap() {
  const today = new Date().toISOString();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add blog posts
  blogPosts.forEach(slug => {
    sitemap += `
  <url>
    <loc>${DOMAIN}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  const publicDir = path.join(__dirname, '../client/public');
  
  // Ensure public dir exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at client/public/sitemap.xml');
}

generateSitemap();
