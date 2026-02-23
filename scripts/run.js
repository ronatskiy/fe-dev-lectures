#!/usr/bin/env node

const { execSync } = require('child_process');

const MODES = {
  dev:    '-w -p 1950',
  start:  '-p 1950',
  export: '--static dist',
};

const [, , mode = 'dev', lecture = 'lecture-01'] = process.argv;
const flags = MODES[mode] ?? MODES.dev;

execSync(`reveal-md src/${lecture}/index.md ${flags}`, { stdio: 'inherit' });
