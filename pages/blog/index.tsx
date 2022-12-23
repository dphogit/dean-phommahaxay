import { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import { Container, Heading } from '@chakra-ui/react';
import { PageLayout } from '../../components/common';
import { Directories } from '../../common/routes';
import { serialize } from 'next-mdx-remote/serialize';

type BlogPostFrontMatter = {
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  mainImageSrc: string;
};

type DataItem = BlogPostFrontMatter & { slug: string; readMins: string };
type Data = DataItem[];

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
  const fileNames = fs.readdirSync(Directories.POSTS);

  const data: Data = [];

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

    data.push({
      ...(frontmatter as BlogPostFrontMatter),
      slug,
      readMins: '2', // TODO Calculate read mins
    });
  }

  // Sort by publishedAt date descending
  data.sort((a, b) => {
    const aDate = new Date(a.publishedAt);
    const bDate = new Date(b.publishedAt);
    return bDate.getTime() - aDate.getTime();
  });

  return {
    props: {
      data,
    },
  };
};

interface BlogProps {
  data: Data;
}

const Blog: NextPage<BlogProps> = ({ data }) => {
  console.log(data);

  return (
    <PageLayout pageName="Blog">
      <Container centerContent py="200px">
        <Heading as="h1" variant="h1" mb="20px">
          Blog Page Coming Soon!
        </Heading>
      </Container>
    </PageLayout>
  );
};

export default Blog;
