import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import markdownToHtml from './markdownToHtml';

export async function getIntro() {
  const fullPath = join(process.cwd(), `pages`, `intro.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);

  return await markdownToHtml(content);
}
