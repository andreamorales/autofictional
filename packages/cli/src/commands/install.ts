import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { detectProject } from '../utils/detect';
import { patchMainFile } from '../utils/patch';
import { generateAppId } from '../utils/generate-id';

export async function install() {
  console.log(chalk.bold.blue('\n🚀 Autofictional Installer\n'));

  const cwd = process.cwd();

  // Step 1: Detect React + Tailwind
  console.log(chalk.dim('→ Detecting project setup...'));
  const detection = detectProject(cwd);

  if (!detection.hasReact) {
    console.error(chalk.red('✗ React not detected. Autofictional requires React.'));
    process.exit(1);
  }

  if (!detection.hasTailwind) {
    console.error(chalk.red('✗ Tailwind CSS not detected. Autofictional requires Tailwind.'));
    process.exit(1);
  }

  if (!detection.hasShadcnSidebar) {
    console.error(chalk.red('✗ shadcn Sidebar not detected. Please install it first.'));
    console.log(chalk.dim('  Run: npx shadcn@latest add sidebar'));
    process.exit(1);
  }

  console.log(chalk.green('✓ React detected'));
  console.log(chalk.green('✓ Tailwind CSS detected'));
  console.log(chalk.green('✓ shadcn Sidebar detected'));

  // Step 2: Install @autofictional/runtime
  console.log(chalk.dim('\n→ Installing @autofictional/runtime...'));
  
  try {
    // Try local package first (for development)
    const runtimePath = path.resolve(__dirname, '../../../runtime');
    const packageJsonPath = path.join(cwd, 'package.json');
    
    // Check if we're in a monorepo with local packages
    if (fs.existsSync(runtimePath) && fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
      const isMonorepo = packageJson.workspaces || fs.existsSync(path.join(cwd, '..', 'packages'));
      
      if (isMonorepo) {
        // Use npm link for local development
        console.log(chalk.dim('  Detected local development - using npm link...'));
        execSync('npm link', { cwd: runtimePath, stdio: 'ignore' });
        execSync('npm link @autofictional/runtime', { cwd, stdio: 'ignore' });
        console.log(chalk.green('✓ Runtime linked (local development)'));
      } else {
        // Install from npm
        console.log(chalk.dim('  Installing from npm...'));
        execSync('npm install @autofictional/runtime', { cwd, stdio: 'inherit' });
        console.log(chalk.green('✓ Runtime installed from npm'));
      }
    } else {
      // Install from npm
      console.log(chalk.dim('  Installing from npm...'));
      execSync('npm install @autofictional/runtime', { cwd, stdio: 'inherit' });
      console.log(chalk.green('✓ Runtime installed from npm'));
    }
  } catch (error) {
    console.error(chalk.red('✗ Failed to install runtime'));
    console.error(chalk.dim('  Try: npm install @autofictional/runtime'));
    console.error(error);
    process.exit(1);
  }

  // Step 3: Generate app ID
  const appId = generateAppId();
  console.log(chalk.dim(`\n→ Generated app ID: ${appId}`));

  // Step 4: Patch main file
  console.log(chalk.dim('\n→ Patching app entry point...'));
  
  const mainFile = detection.mainFile;
  if (!mainFile) {
    console.error(chalk.red('✗ Could not find app entry point (main.tsx/main.jsx/index.tsx/index.jsx)'));
    process.exit(1);
  }

  try {
    patchMainFile(mainFile, appId);
    console.log(chalk.green(`✓ Patched ${path.relative(cwd, mainFile)}`));
  } catch (error) {
    console.error(chalk.red('✗ Failed to patch main file'));
    console.error(error);
    process.exit(1);
  }

  // Success
  console.log(chalk.bold.green('\n✓ Autofictional installed successfully!\n'));
  console.log(chalk.dim('Next steps:'));
  console.log(chalk.dim('  1. Start your dev server'));
  console.log(chalk.dim('  2. Check console for errors'));
  console.log(chalk.dim('  3. Verify AutofictionalProvider is mounted\n'));
}

