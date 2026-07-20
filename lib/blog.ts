import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import readingTime, { ReadTimeResults } from 'reading-time';
import * as z from 'zod';

const FrontMatter = z.object({
  title: z.string(),
  /** A string date expected in the 'YYYY-MM-DD' ISO format. */
  date: z.iso.date(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

type FrontMatter = z.infer<typeof FrontMatter>;

export type BlogPostMetaData = {
  title: string;
  slug: string;
  date: string;
  image: {
    src: string;
    alt: string;
  };
  readingTimeStats: ReadTimeResults;
};

export type BlogPost = {
  meta: BlogPostMetaData;
  contentMarkdown: string;
};

const BLOG_POSTS_DIR = path.join(process.cwd(), 'blog');

function removeMarkdownExtension(fileName: string): string {
  return fileName.replace(/.md$/, '');
}

async function getMarkdownFiles(): Promise<string[]> {
  const names = await fs.readdir(BLOG_POSTS_DIR);
  return names.filter((name) => path.extname(name).toLowerCase() == '.md');
}

async function readPostFile(fileName: string): Promise<string> {
  const filePath = path.join(BLOG_POSTS_DIR, fileName);
  return await fs.readFile(filePath, 'utf8');
}

async function getPostMatter(fileName: string) {
  const fileContent = await readPostFile(fileName);
  const matterResult = matter(fileContent);
  return matterResult;
}

export async function getBlogMetaData(): Promise<BlogPostMetaData[]> {
  const markdownFileNames = await getMarkdownFiles();

  const promises = markdownFileNames.map(async (fileName) => {
    const matterResult = await getPostMatter(fileName);
    const metadata = FrontMatter.parse(matterResult.data);
    const readingTimeStats = readingTime(matterResult.content);

    return {
      slug: removeMarkdownExtension(fileName),
      readingTimeStats,
      ...metadata,
    };
  });

  const data = await Promise.all(promises);

  // Sort by date descending order (latest post first)
  const dateDescendingData = data.sort((a, b) => b.date.localeCompare(a.date));

  return dateDescendingData;
}

export async function getAllSlugs(): Promise<string[]> {
  const markdownFileNames = await getMarkdownFiles();
  return markdownFileNames.map(removeMarkdownExtension);
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fileName = `${slug}.md`;
  const matterResult = await getPostMatter(fileName);
  const metadata = FrontMatter.parse(matterResult.data);
  const readingTimeStats = readingTime(matterResult.content);

  return {
    meta: { ...metadata, readingTimeStats, slug },
    contentMarkdown: matterResult.content,
  };
}
