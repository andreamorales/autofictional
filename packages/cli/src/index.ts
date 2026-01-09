#!/usr/bin/env node

import { Command } from 'commander';
import { install } from './commands/install';

const program = new Command();

program
  .name('autofictional')
  .description('Install Autofictional autonomous sidebar adaptation')
  .version('0.1.0');

program
  .command('install')
  .description('Install Autofictional runtime into your app')
  .action(install);

// Default to install if no command specified
if (process.argv.length === 2) {
  install();
} else {
  program.parse(process.argv);
}

