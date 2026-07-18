import { Container } from '@chakra-ui/react';
import { GetStaticPropsResult, NextPage } from 'next';
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
      <Container pt="128px" pb="64px" px={['24px', null, null, '16px']}>
        <ul>
          {data.map((p) => (
            <li key={p.slug}>{p.title}</li>
          ))}
        </ul>
      </Container>
    </PageLayout>
  );
};

export default Blog;
