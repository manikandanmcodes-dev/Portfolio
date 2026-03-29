import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Local Dev CMS: intercepts visual edits and writes them permanently to defaultAppData.js
const localCmsPlugin = () => ({
  name: 'local-cms-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/save-data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
          try {
            const parsed = JSON.parse(body);
            // Write it back as a valid ES Module!
            const content = `export const defaultAppData = ${JSON.stringify(parsed, null, 2)};\n`;
            fs.writeFileSync(path.resolve(__dirname, 'src/data/defaultAppData.js'), content, 'utf-8');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localCmsPlugin()],
})
