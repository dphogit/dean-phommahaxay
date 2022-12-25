import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Container } from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import { Directories } from '../../common/routes';
import { BlogPostFrontMatter } from '../../lib/blog/types';
import readingTime from 'reading-time';
import { PageLayout } from '../../components/common';
import { PostBody, PostHeader } from '../../components/blog/post';

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

const Post: NextPage<PostProps> = ({ mdxSource, frontMatter, readMins }) => {
  return (
    <PageLayout pageName={frontMatter.title}>
      <Container mt={['120px', '160px']} mb={['60px', '100px']} as="article">
        <PostHeader frontMatter={frontMatter} readMins={readMins} />
        <PostBody mdxSource={mdxSource} />
      </Container>
    </PageLayout>
  );
};

export default Post;
