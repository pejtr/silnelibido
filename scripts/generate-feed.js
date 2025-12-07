const fs = require('fs');
const path = require('path');

// Load product data
const products = require('../data/products.json');

// Base URL of the landing page
const BASE_URL = 'https://silnelibido.cz';

function generateFeed() {
  let xml = `<?xml version="1.0"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title>Proerecta Products</title>
<link>${BASE_URL}</link>
<description>Proerecta product feed for Meta Ads</description>
`;

  products.forEach(product => {
    // For affiliate landing pages, we want the ad to link to OUR landing page, 
    // but anchored to the specific product section if possible, or just the main page.
    // Since it's a single page app (mostly), we'll link to the homepage with a hash or query param
    // that we can handle (or just the homepage if simple).
    
    // Let's link to the homepage with an anchor to the products section
    // We add UTM parameters for tracking
    const link = `${BASE_URL}/?utm_source=facebook&utm_medium=cpc&utm_campaign=dynamic_ads&product_id=${product.id}#products`;
    
    // Image URL needs to be absolute
    const imageLink = `${BASE_URL}${product.image}`;
    
    xml += `
<item>
  <g:id>${product.id}</g:id>
  <g:title>${product.name}</g:title>
  <g:description>${product.description}</g:description>
  <g:link>${link}</g:link>
  <g:image_link>${imageLink}</g:image_link>
  <g:brand>Proerecta</g:brand>
  <g:condition>new</g:condition>
  <g:availability>in stock</g:availability>
  <g:price>${product.price} ${product.currency}</g:price>
  <g:custom_label_0>${product.id.includes('women') ? 'women' : 'men'}</g:custom_label_0>
</item>
`;
  });

  xml += `
</channel>
</rss>`;

  // Write to public folder
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir);
  }
  
  fs.writeFileSync(path.join(publicDir, 'products.xml'), xml);
  console.log('Feed generated at public/products.xml');
}

generateFeed();
