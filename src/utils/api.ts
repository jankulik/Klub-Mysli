import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const workshopsDirectory = join(process.cwd(), 'src/utils/workshops');

export function getWorkshop(slug: string) {
  const fullPath = join(workshopsDirectory, `${slug.replace(/\.md$/, '')}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  }

  const items: Items = {};

  items['slug'] = slug;
  items['content'] = content;
  
  for (let key in data) {
    if (data.hasOwnProperty(key))
      items[key] = data[key];
  }

  return items;
}

export function getWorkshops() {
  const slugs = fs.readdirSync(workshopsDirectory);
  const workshops = slugs
    .map((slug) => getWorkshop(slug))
    .sort((workshop1, workshop2) => (workshop1.date > workshop2.date ? -1 : 1));

  return workshops;
}
