#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Temporarily rename the API directory for Cloudflare builds
const apiPath = path.join(process.cwd(), 'app', 'api');
const apiBackupPath = path.join(process.cwd(), 'app', '_api_backup');

if (fs.existsSync(apiPath)) {
  fs.renameSync(apiPath, apiBackupPath);
  console.log('✓ API routes excluded from Cloudflare build');
}
