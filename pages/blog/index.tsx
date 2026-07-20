import { Heading, SimpleGrid } from '@chakra-ui/react';
import { GetStaticPropsResult, NextPage } from 'next';
import { BlogPostCard } from '../../components/blog';
import { PageLayout } from '../../components/common';
import { BlogPostMetaData, getBlogMetaData } from '../../lib/blog';

type BlogPageProps = {
  data: BlogPostMetaData[];
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlogPageProps>
> {
  const data = await getBlogMetaData();
  return {
    props: { data },
  };
}

const Blog: NextPage<BlogPageProps> = ({ data }) => {
  return (
    <PageLayout pageName="Blog">
      <Heading mb="36px">Blog</Heading>
      <SimpleGrid columns={[1, null, null, 3]} spacing="24px">
        {data.map((p) => (
          <BlogPostCard key={p.slug} post={p} />
        ))}
      </SimpleGrid>
    </PageLayout>
  );
};

export default Blog;
