import fs from 'fs';
import path from 'path';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
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

export const getMinsReadingTime = (content: string): string => {
  return Math.ceil(readingTime(content).minutes).toString();
};

export const getAllSlugs = (): string[] => {
  const fileNames = fs.readdirSync(Directories.POSTS);
  return fileNames.map((fileName) => fileName.replace(/\.mdx?$/, ''));
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
      !frontmatter.mainImageSrc ||
      !frontmatter.mainImageAlt
    ) {
      throw new Error(`Frontmatter is missing required fields for ${fileName}`);
    }

    previewPosts.push({
      ...(frontmatter as BlogPostFrontMatter),
      slug,
      readMins: getMinsReadingTime(fileContents),
    });
  }

  return sortPostsByLastPublished(previewPosts);
};

export const getBlogPostDataBySlug = async (
  slug: string,
): Promise<{
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: BlogPostFrontMatter;
  readMins: string;
}> => {
  const filePath = path.join(Directories.POSTS, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const mdxSource = await serialize(fileContents, {
    parseFrontmatter: true,
    mdxOptions: { development: false }, // https://github.com/hashicorp/next-mdx-remote/issues/307#issuecomment-1363415249 Work
  });

  const frontmatter = mdxSource.frontmatter;

  if (!frontmatter) {
    throw new Error(`No frontmatter found for ${slug}`);
  }

  // Type check frontmatter for required fields
  if (
    !frontmatter.title ||
    !frontmatter.description ||
    !frontmatter.category ||
    !frontmatter.mainImageSrc ||
    !frontmatter.mainImageAlt
  ) {
    throw new Error(`Frontmatter is missing required fields for ${slug}`);
  }

  return {
    frontMatter: frontmatter as BlogPostFrontMatter,
    mdxSource,
    readMins: getMinsReadingTime(fileContents),
  };
};
