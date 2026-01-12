import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getTitleFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    // Check for frontmatter
    if (lines[0] === '---') {
      let endIndex = -1;
      for (let i = 1; i < lines.length; i++) {
        if (lines[i] === '---') {
          endIndex = i;
          break;
        }
      }
      if (endIndex > 0) {
        const frontmatter = lines.slice(1, endIndex).join('\n');
        const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
        if (titleMatch) {
          return titleMatch[1].trim().replace(/^["']|["']$/g, '');
        }
      }
    }
    // Check for first heading
    for (const line of lines) {
      const headingMatch = line.match(/^#\s+(.+)/);
      if (headingMatch) {
        const title = headingMatch[1].trim();
        return title;
      }
    }
  } catch (e) {
    // Ignore errors
  }
  return null;
}

function scanDirectory(dir, basePath = '', lang) {
  const items = fs.readdirSync(dir);
  const tree = {};

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const relativePath = basePath ? `${basePath}/${item}` : item;

    if (stat.isDirectory()) {
      const subTree = scanDirectory(fullPath, relativePath, lang);
      const indexFile = path.join(fullPath, 'index.md');
      const indexTitle = fs.existsSync(indexFile) ? getTitleFromFile(indexFile) : null;
      const parts = [lang, basePath, item].filter(Boolean).join('/');
      let p = parts.replace(/\\/g, '/').replace(/\/\/+/g, '/').replace(/\/$/, '');
      p = p.replace(/^\//, '');
      tree[item] = {
        title: indexTitle || item,
        path: p,
        children: subTree
      };
    } else if (item.endsWith('.md')) {
      const name = item.replace('.md', '');
      const title = getTitleFromFile(fullPath) || name;
      let parts = [lang];
      if (basePath) parts = parts.concat(basePath.split('/'));
      if (name !== 'index') parts.push(name);
      let p = parts.join('/').replace(/\\/g, '/').replace(/\/\/+/g, '/').replace(/\/$/, '');
      p = p.replace(/^\//, '');
      tree[name] = { title, path: p };
    }
  });

  return tree;
}

const languages = ['zh', 'en', 'ru', 'id', 'jp', 'tw'];
const trees = {};

for (const lang of languages) {
  const langDir = path.join(__dirname, 'docs', lang);
  if (fs.existsSync(langDir)) {
    trees[lang] = scanDirectory(langDir, '', lang);
  }
}

const output = `export const catalogTrees = ${JSON.stringify(trees, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'docs', '.vitepress', 'catalog-tree.ts'), output);

console.log('Catalog trees generated');