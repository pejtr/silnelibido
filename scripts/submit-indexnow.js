import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'silnelibido.cz';
const KEY = '7265746f726e6f77'; // Example key, in production this should be generated/secure
const KEY_LOCATION = `https://${DOMAIN}/${KEY}.txt`;

// Generate key file if it doesn't exist
const publicDir = path.join(__dirname, '../client/public');
const keyFilePath = path.join(publicDir, `${KEY}.txt`);

if (!fs.existsSync(keyFilePath)) {
  fs.writeFileSync(keyFilePath, KEY);
  console.log(`Created IndexNow key file at ${keyFilePath}`);
}

// Get all blog posts to submit
const blogPostsDir = path.join(__dirname, '../client/src/data/blog-posts');
const blogFiles = fs.readdirSync(blogPostsDir).filter(file => file.endsWith('.md'));

const urlsToSubmit = [
  `https://${DOMAIN}/`,
  `https://${DOMAIN}/blog`,
  ...blogFiles.map(file => `https://${DOMAIN}/blog/${file.replace('.md', '')}`)
];

const data = JSON.stringify({
  host: DOMAIN,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlsToSubmit
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

console.log(`Submitting ${urlsToSubmit.length} URLs to IndexNow...`);

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error('Error submitting to IndexNow:', error);
});

req.write(data);
req.end();
