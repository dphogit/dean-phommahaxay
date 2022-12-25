import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Container, Heading } from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { Directories } from '../../common/routes';
import { BlogPostFrontMatter } from '../../lib/blog/types';
import readingTime from 'reading-time';
import { PageLayout } from '../../components/common';
import { MDXComponents } from 'mdx/types';

interface PostProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: BlogPostFrontMatter;
  readMins: string;
}

interface PostParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<PostParams> = () => {
  const fileNames = fs.readdirSync(Directories.POSTS);

  return {
    paths: fileNames.map((fileName) => ({
      params: { slug: fileName.replace(/\.mdx?$/, '') },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { slug } = params;
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

  const readMins: string = Math.ceil(
    readingTime(fileContents).minutes,
  ).toString();

  return {
    props: {
      frontMatter: frontmatter as BlogPostFrontMatter,
      mdxSource,
      readMins,
    },
  };
};

const components: MDXComponents = {};

const Post: NextPage<PostProps> = ({ mdxSource, frontMatter, readMins }) => {
  return (
    <PageLayout pageName={frontMatter.title}>
      <Container maxWidth="3xl" my="160px">
        <Heading as="h1" variant="h3">
          {frontMatter.title}
        </Heading>
        <MDXRemote {...mdxSource} components={components} />
      </Container>
    </PageLayout>
  );
};

export default Post;
