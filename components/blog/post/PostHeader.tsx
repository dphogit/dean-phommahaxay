import { BlogPostFrontMatter } from '../../../lib/blog/types';
import { Container, Heading, Img, Text } from '@chakra-ui/react';

interface PostHeaderProps {
  frontMatter: BlogPostFrontMatter;
  readMins: string;
}

const PostHeader = ({ frontMatter, readMins }: PostHeaderProps) => {
  const publishedAtAndReadMins = `${frontMatter.publishedAt} | ${readMins} min read`;

  return (
    <Container as="header" maxWidth="container.lg" textAlign="center">
      <Heading as="h5" variant="h5" mb="16px" color="teal.500">
        {frontMatter.category}
      </Heading>
      <Heading as="h1" variant="h2">
        {frontMatter.title}
      </Heading>
      <Text fontSize="20px" mt="24px" color="gray.500">
        {frontMatter.description}
      </Text>
      <Text color="gray.500" mt="16px" mb="24px">
        {publishedAtAndReadMins}
      </Text>
      <Img src={frontMatter.mainImageSrc} alt={frontMatter.mainImageAlt} />
    </Container>
  );
};

export default PostHeader;
