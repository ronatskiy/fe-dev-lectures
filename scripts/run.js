#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('./pdf')) {
  fs.mkdirSync('./pdf');
}

const MODES = {
  dev:    '-w -p 1950',
  start:  '-p 1950',
  export: '--static dist',
  pdf:    '--print --port 1951 --puppeteer-launch-args="--no-sandbox --disable-dev-shm-usage"' 
};

const [, , mode = 'dev', lecture = 'lecture-01'] = process.argv;
const flags = MODES[mode] ?? MODES.dev;


const output = mode === 'pdf' ? `${lecture}.pdf` : '';

execSync(`npx reveal-md slides/${lecture}/${lecture}.md --theme css/theme.css ${flags} ${output}`, { stdio: 'inherit' });

if (mode === 'pdf' && fs.existsSync(output)) {
  fs.renameSync(output, `./pdf/${output}`);
  console.log(`Moved ${output} to ./pdf/`);
}

