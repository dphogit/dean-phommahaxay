import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { Directories } from '../../common/routes';
import type { BlogPagePreviewPost, BlogPostFrontMatter } from './types';

const sortPostsByLastPublished = (
  posts: BlogPagePreviewPost[],
): BlogPagePreviewPost[] => {
  return [...posts].sort((a, b) => {
    const aDate = new Date(a.publishedAt);
    const bDate = new Date(b.publishedAt);
    return bDate.getTime() - aDate.getTime();
  });
};

export const getBlogPagePosts = async (): Promise<BlogPagePreviewPost[]> => {
  const fileNames = fs.readdirSync(Directories.POSTS);

  const previewPosts: BlogPagePreviewPost[] = [];

  for (const fileName of fileNames) {
    const slug = fileName.replace(/\.mdx?$/, '');
    const fullPath = path.join(Directories.POSTS, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const frontmatter: Partial<BlogPostFrontMatter> | undefined = (
      await serialize(fileContents, { parseFrontmatter: true })
    ).frontmatter;

    if (!frontmatter) {
      throw new Error(`No frontmatter found for ${fileName}`);
    }

    // Not published so don't show in blog list
    if (!frontmatter.publishedAt) {
      continue;
    }

    // Type check frontmatter for required fields
    if (
      !frontmatter.title ||
      !frontmatter.description ||
      !frontmatter.category ||
      !frontmatter.mainImageSrc
    ) {
      throw new Error(`Frontmatter is missing required fields for ${fileName}`);
    }

    previewPosts.push({
      ...(frontmatter as BlogPostFrontMatter),
      slug,
      readMins: '2', // TODO Calculate read mins
    });
  }

  // Sort by publishedAt date descending
  return previewPosts.sort((a, b) => {
    const aDate = new Date(a.publishedAt);
    const bDate = new Date(b.publishedAt);
    return bDate.getTime() - aDate.getTime();
  });
};
