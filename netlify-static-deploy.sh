#!/bin/bash

# Create a temporary build folder
mkdir -p temp_build/client

# Copy necessary files
cp -r client/src temp_build/client/
cp client/index.html temp_build/client/
cp -r attached_assets/ temp_build/client/assets/
cp package.json temp_build/
cp netlify.toml temp_build/

# Create a minimal vite.config.js for static build
cat > temp_build/vite.config.js << EOF
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './client',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './client/assets')
    }
  }
});
EOF

# Create a README with instructions
cat > temp_build/README.md << EOF
# BRAVEZM Profile

Static build for Netlify deployment. Upload this folder to Netlify.

## Deployment Instructions

1. Go to Netlify and create a new site
2. Upload this folder
3. Set the build command to: npm install && npm run build
4. Set the publish directory to: dist

For custom domain setup:
1. Purchase the domain (bravezm.com)
2. Add it in Netlify settings
3. Follow the DNS instructions from Netlify
EOF

echo "Created deployment package in temp_build/"
echo "Upload this folder to Netlify to deploy the static site"