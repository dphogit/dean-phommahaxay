import { GetStaticProps, NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import { PageLayout } from '../../components/common';
import { getBlogPagePosts } from '../../lib/blog';
import type { BlogPagePreviewPost } from '../../lib/blog/types';
import { LatestPosts } from '../../components/blog';
import { CallToAction } from '../../components/home';

const NUM_LATEST_POSTS = 2;

interface BlogPageProps {
  latestPosts: BlogPagePreviewPost[];
  otherPosts: BlogPagePreviewPost[];
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const blogPagePosts = await getBlogPagePosts();

  let latestPosts: BlogPagePreviewPost[];
  let otherPosts: BlogPagePreviewPost[];

  if (blogPagePosts.length > NUM_LATEST_POSTS) {
    latestPosts = blogPagePosts.slice(0, NUM_LATEST_POSTS);
    otherPosts = blogPagePosts.slice(NUM_LATEST_POSTS);
  } else {
    latestPosts = blogPagePosts;
    otherPosts = [];
  }

  return {
    props: { latestPosts, otherPosts },
  };
};

const Blog: NextPage<BlogPageProps> = ({ latestPosts }) => {
  return (
    <PageLayout pageName="Blog">
      <Container mt="150px" px="16px" mb="100px">
        <Heading as="h2" variant="h2" textAlign="center" mb="40px">
          The Latest
        </Heading>
        <LatestPosts latestPosts={latestPosts} />
      </Container>
    </PageLayout>
  );
};

export default Blog;
