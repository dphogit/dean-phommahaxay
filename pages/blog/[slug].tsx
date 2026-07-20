import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { MarkdownContent } from '../../components/blog';
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
      <Container px={0} maxWidth="container.sm" position="relative">
        <Image
          src={post.meta.image.src}
          alt={post.meta.image.alt}
          width={1200}
          height={800}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ borderRadius: '8px' }}
        />
        <VStack alignItems="start" mt="32px" mb="16px" spacing="4px">
          <Heading as="h1">{post.meta.title}</Heading>
          <Text color="GrayText" fontSize="sm">
            {post.meta.date}
          </Text>
        </VStack>
        <MarkdownContent content={post.contentMarkdown} />
      </Container>
    </PageLayout>
  );
};

export default BlogPostPage;
