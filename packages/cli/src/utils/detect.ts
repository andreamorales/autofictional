import * as fs from 'fs';
import * as path from 'path';

export interface ProjectDetection {
  hasReact: boolean;
  hasTailwind: boolean;
  hasShadcnSidebar: boolean;
  mainFile: string | null;
}

export function detectProject(cwd: string): ProjectDetection {
  const detection: ProjectDetection = {
    hasReact: false,
    hasTailwind: false,
    hasShadcnSidebar: false,
    mainFile: null,
  };

  // Check for package.json and dependencies
  const packageJsonPath = path.join(cwd, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    detection.hasReact = 'react' in allDeps;
    detection.hasTailwind = 'tailwindcss' in allDeps;
  }

  // Check for shadcn sidebar component
  const possibleSidebarPaths = [
    path.join(cwd, 'src/components/ui/sidebar.tsx'),
    path.join(cwd, 'components/ui/sidebar.tsx'),
    path.join(cwd, 'frontend/src/components/ui/sidebar.tsx'),
  ];

  for (const sidebarPath of possibleSidebarPaths) {
    if (fs.existsSync(sidebarPath)) {
      detection.hasShadcnSidebar = true;
      break;
    }
  }

  // Find main entry file
  const possibleMainFiles = [
    path.join(cwd, 'src/main.tsx'),
    path.join(cwd, 'src/main.jsx'),
    path.join(cwd, 'src/index.tsx'),
    path.join(cwd, 'src/index.jsx'),
    path.join(cwd, 'frontend/src/main.tsx'),
    path.join(cwd, 'frontend/src/main.jsx'),
    path.join(cwd, 'frontend/src/index.tsx'),
    path.join(cwd, 'frontend/src/index.jsx'),
  ];

  for (const mainFile of possibleMainFiles) {
    if (fs.existsSync(mainFile)) {
      detection.mainFile = mainFile;
      break;
    }
  }

  return detection;
}

