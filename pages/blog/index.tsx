import { Container, Link } from '@chakra-ui/react';
import { GetStaticPropsResult, NextPage } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  function createHrefToPost(slug: string) {
    return `${router.pathname}/${slug}`;
  }

  return (
    <PageLayout pageName="Blog">
      <Container pt="128px" pb="64px" px={['24px', null, null, '16px']}>
        <ul>
          {data.map((p) => (
            <li key={p.slug}>
              <Link as={NextLink} href={createHrefToPost(p.slug)}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </PageLayout>
  );
};

export default Blog;
