import { Container, Heading } from '@chakra-ui/react';
import { PageLayout } from '../../components/common';

const Blog = () => {
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
