import fs from 'fs-extra';
import path from 'path';
import { Converter } from 'opencc-js';

const converter = Converter({ from: 'cn', to: 'tw' });

const srcDir = 'docs/zh';
const destDir = 'docs/tw';

// 复制 zh 到 tw，排除所有 index.md 文件
fs.copySync(srcDir, destDir, {
    overwrite: true,
    filter: (src, dest) => {
        const relativeSrc = path.relative(srcDir, src);
        const relativeDest = path.relative(destDir, dest);

        // 排除任何 index.md 文件
        if (relativeSrc.endsWith('index.md') || relativeDest.endsWith('index.md')) {
            return false;
        }

        return true;
    }
});

// 转换所有复制的 .md 文件为繁体中文
function convertDirectory(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            convertDirectory(fullPath);
        } else if (item.endsWith('.md')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            const converted = converter(content);
            fs.writeFileSync(fullPath, converted, 'utf-8');
        }
    });
}

convertDirectory(destDir);

console.log('Synced docs/zh to docs/tw, excluding index.md files, and converted to Traditional Chinese.');