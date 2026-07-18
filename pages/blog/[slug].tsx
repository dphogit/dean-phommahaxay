import { Container, Heading, Text } from '@chakra-ui/react';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { PageLayout } from '../../components/common';
import { BlogPost, getAllSlugs, getBlogPost } from '../../lib/blog';

interface BlogPostPagePathParams extends ParsedUrlQuery {
  slug: string;
}

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<BlogPostPagePathParams>
> {
  const slugs = await getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return { fallback: false, paths };
}

type BlogPostPageProps = {
  post: BlogPost;
};

export async function getStaticProps(
  context: GetStaticPropsContext<BlogPostPagePathParams>,
): Promise<GetStaticPropsResult<BlogPostPageProps>> {
  const slug = context.params?.slug;

  if (!slug) {
    return { notFound: true };
  }

  const post = await getBlogPost(slug);

  return {
    props: { post },
  };
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post }) => {
  return (
    <PageLayout pageName={post.meta.title}>
      <Container pt="128px" pb="64px" px={['24px', null, null, '16px']}>
        <Heading as="h1">{post.meta.title}</Heading>
        <Text color="GrayText">{post.meta.date}</Text>
        <p>{post.contentHtml}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} /> */}
      </Container>
    </PageLayout>
  );
};

export default BlogPostPage;
