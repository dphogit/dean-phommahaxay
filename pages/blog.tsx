import { Container } from '@chakra-ui/react';
import { NextPage } from 'next';
import { PageLayout } from '../components/common';

const Blog: NextPage = () => {
  return (
    <PageLayout pageName="Blog">
      <Container pt="128px" pb="64px" px={['24px', null, null, '16px']}>
        <p>Blog Page</p>
      </Container>
    </PageLayout>
  );
};

export default Blog;
