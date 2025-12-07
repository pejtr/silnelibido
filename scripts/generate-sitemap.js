const fs = require('fs');
const path = require('path');

// Define the base URL
const BASE_URL = 'https://silnelibido.cz';

// Define static pages
const staticPages = [
  '',
  '/recenze',
  '/blog',
];

// Function to get blog posts
// Since we can't import TS files directly in JS script without compilation, 
// we'll read the file content and extract slugs using regex or simple parsing if possible.
// Or better, we can assume the data structure if we know it.
// But for robustness, let's try to read the blogPosts.ts file.

const blogPostsPath = path.join(__dirname, '../data/blogPosts.ts');

function getBlogSlugs() {
  try {
    const content = fs.readFileSync(blogPostsPath, 'utf8');
    // Look for id: "slug" pattern
    const regex = /id:\s*["']([^"']+)["']/g;
    const slugs = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      slugs.push(match[1]);
    }
    return slugs;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

function generateSitemap() {
  const blogSlugs = getBlogSlugs();
  const date = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    xml += `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add blog posts
  blogSlugs.forEach(slug => {
    xml += `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log(`Sitemap generated with ${staticPages.length + blogSlugs.length} URLs`);
}

generateSitemap();
