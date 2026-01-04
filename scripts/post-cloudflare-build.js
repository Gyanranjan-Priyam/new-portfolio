#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Restore the API directory after build
const apiPath = path.join(process.cwd(), 'app', 'api');
const apiBackupPath = path.join(process.cwd(), 'app', '_api_backup');

if (fs.existsSync(apiBackupPath)) {
  fs.renameSync(apiBackupPath, apiPath);
  console.log('✓ API routes restored');
}
