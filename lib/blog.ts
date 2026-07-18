import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import * as z from 'zod';

const FrontMatter = z.object({
  title: z.string(),

  /**
   * A string date expected in the 'YYYY-MM-DD' ISO format.
   */
  date: z.iso.date(),

  /**
   * An optional URL slug for the blog post. If not provided in the markdown
   * file's frontmatter, it will default to the markdown file's name without
   * the '.md' extension. e.g. 'my-post.md' => 'my-post'
   */
  slug: z.string().optional(),
});

type FrontMatter = z.infer<typeof FrontMatter>;

export type BlogPostMetaData = {
  title: string;
  slug: string;
};

const POSTS_DIR = path.join(process.cwd(), 'blog');

export async function getBlogMetaData(): Promise<BlogPostMetaData[]> {
  const names = await fs.readdir(POSTS_DIR);
  const markdownFileNames = names.filter(
    (name) => path.extname(name).toLowerCase() == '.md',
  );

  const promises = markdownFileNames.map(async (fileName) => {
    // Read and parse frontmatter
    const filePath = path.join(POSTS_DIR, fileName);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const matterResult = matter(fileContent);
    const metadata = FrontMatter.parse(matterResult.data);

    // The slug url is optional metadata, we default to use the markdown
    // file name with the '.md' extension removed.
    const slug = metadata.slug ?? fileName.replace(/.md$/, '');

    return {
      slug,
      title: metadata.title,
      date: metadata.date,
    };
  });

  const data = await Promise.all(promises);

  // Sort by date descending order (latest post first)
  const dateDescendingData = data.sort((a, b) => b.date.localeCompare(a.date));

  return dateDescendingData;
}
