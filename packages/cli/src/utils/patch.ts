import * as fs from 'fs';
import * as path from 'path';

export function patchMainFile(mainFilePath: string, appId: string): void {
  const content = fs.readFileSync(mainFilePath, 'utf-8');

  // Check if already patched
  if (content.includes('AutofictionalProvider')) {
    throw new Error('AutofictionalProvider already exists in main file. Aborting to avoid duplicate installation.');
  }

  // Parse the file structure
  const lines = content.split('\n');
  
  // Find import section end
  let lastImportIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      lastImportIndex = i;
    }
  }

  // Find ReactDOM.createRoot call
  let rootCallIndex = -1;
  let rootCallEndIndex = -1;
  let indentLevel = 0;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('ReactDOM.createRoot') || lines[i].includes('createRoot')) {
      rootCallIndex = i;
      
      // Find the closing parenthesis of the render call
      let depth = 0;
      for (let j = i; j < lines.length; j++) {
        const line = lines[j];
        depth += (line.match(/\(/g) || []).length;
        depth -= (line.match(/\)/g) || []).length;
        
        if (depth === 0 && line.includes(')')) {
          rootCallEndIndex = j;
          break;
        }
      }
      break;
    }
  }

  if (rootCallIndex === -1 || rootCallEndIndex === -1) {
    throw new Error('Could not find ReactDOM.createRoot call. Manual installation required.');
  }

  // Detect indentation
  const rootLine = lines[rootCallIndex];
  const indent = rootLine.match(/^(\s*)/)?.[1] || '  ';

  // Extract the content between <React.StrictMode> tags or the RouterProvider
  let contentStart = -1;
  let contentEnd = -1;
  
  for (let i = rootCallIndex; i <= rootCallEndIndex; i++) {
    if (lines[i].includes('<React.StrictMode>') || lines[i].includes('<RouterProvider') || lines[i].includes('<App')) {
      contentStart = i;
      break;
    }
  }

  for (let i = rootCallEndIndex; i >= rootCallIndex; i--) {
    if (lines[i].includes('</React.StrictMode>') || lines[i].includes('/>') || lines[i].includes('</App>')) {
      contentEnd = i;
      break;
    }
  }

  if (contentStart === -1 || contentEnd === -1) {
    throw new Error('Could not parse render content. Manual installation required.');
  }

  // Build the new content
  const newLines = [...lines];

  // Add import after last import
  const importLine = `import { AutofictionalProvider } from '@autofictional/runtime';`;
  newLines.splice(lastImportIndex + 1, 0, importLine);

  // Adjust indices after insertion
  contentStart += 1;
  contentEnd += 1;

  // Extract the wrapped content
  const wrappedContent = newLines.slice(contentStart, contentEnd + 1);
  
  // Indent the wrapped content
  const indentedContent = wrappedContent.map(line => indent + '  ' + line.trimStart());

  // Create the provider wrapper
  const providerStart = `${indent}  <AutofictionalProvider appId="${appId}">`;
  const providerEnd = `${indent}  </AutofictionalProvider>`;

  // Replace the content
  newLines.splice(
    contentStart,
    contentEnd - contentStart + 1,
    providerStart,
    ...indentedContent,
    providerEnd
  );

  // Write back
  const newContent = newLines.join('\n');
  
  // Create backup
  const backupPath = mainFilePath + '.backup';
  fs.writeFileSync(backupPath, content);

  // Write new content
  fs.writeFileSync(mainFilePath, newContent);
}

