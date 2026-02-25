#!/usr/bin/env node

const { execSync } = require('child_process');

const MODES = {
  dev:    '-w -p 1950',
  start:  '-p 1950',
  export: '--static dist',
  pdf:    '--print --port 1951 --puppeteer-launch-args="--no-sandbox --disable-dev-shm-usage"' 
};

const [, , mode = 'dev', lecture = 'lecture-01'] = process.argv;
const flags = MODES[mode] ?? MODES.dev;


const output = mode === 'pdf' ? `./pdf/${lecture}.pdf` : '';

execSync(`npx reveal-md src/${lecture}/index.md --theme css/theme.css ${flags} ${output}`, { stdio: 'inherit' });

