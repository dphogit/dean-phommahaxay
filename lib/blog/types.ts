export type BlogPostFrontMatter = {
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  mainImageSrc: string;
  mainImageAlt: string;
};

export type BlogPagePreviewPost = BlogPostFrontMatter & {
  slug: string;
  readMins: string;
};
