import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Container } from '@chakra-ui/react';
import { ParsedUrlQuery } from 'querystring';
import { BlogPostFrontMatter } from '../../lib/blog/types';
import { PageLayout } from '../../components/common';
import { PostBody, PostHeader } from '../../components/blog';
import { getAllSlugs, getBlogPostDataBySlug } from '../../lib/blog';

interface PostProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: BlogPostFrontMatter;
  readMins: string;
}

interface PostParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths<PostParams> = () => {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
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

  const data = await getBlogPostDataBySlug(params.slug);

  return {
    props: { ...data },
  };
};

const Post: NextPage<PostProps> = ({ mdxSource, frontMatter, readMins }) => {
  return (
    <PageLayout pageName={frontMatter.title}>
      <Container
        mt={['120px', '160px']}
        mb={['60px', '100px']}
        as="article"
        px={['24px', null, null, '16px']}
      >
        <PostHeader frontMatter={frontMatter} readMins={readMins} />
        <PostBody mdxSource={mdxSource} />
      </Container>
    </PageLayout>
  );
};

export default Post;
