export type BlogPostFrontMatter = {
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  mainImageSrc: string;
};

export type BlogPagePreviewPost = BlogPostFrontMatter & {
  slug: string;
  readMins: string;
};
