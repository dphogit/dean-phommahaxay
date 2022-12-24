import { GetStaticProps, NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import { PageLayout } from '../../components/common';
import { getBlogPagePosts } from '../../lib/blog';
import type { BlogPagePreviewPost } from '../../lib/blog/types';

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
    latestPosts = [blogPagePosts[0], blogPagePosts[1]];
    otherPosts = blogPagePosts.slice(2);
  } else {
    latestPosts = blogPagePosts;
    otherPosts = [];
  }

  return {
    props: { latestPosts, otherPosts },
  };
};

// TODO Show the posts.
const Blog: NextPage<BlogPageProps> = ({ latestPosts, otherPosts }) => {
  console.log(latestPosts);
  console.log(otherPosts);

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
