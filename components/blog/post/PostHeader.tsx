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
      <Heading
        as="h5"
        variant={['h5xs', null, null, 'h5']}
        mb="16px"
        color="teal.500"
      >
        {frontMatter.category}
      </Heading>
      <Heading as="h1" variant={['h2xs', null, null, 'h2']}>
        {frontMatter.title}
      </Heading>
      <Text
        fontSize={['16px', '20px']}
        lineHeight="1.5"
        mt="24px"
        color="gray.500"
      >
        {frontMatter.description}
      </Text>
      <Text color="gray.500" mt="16px" mb="24px" fontSize={['14px', '16px']}>
        {publishedAtAndReadMins}
      </Text>
      <Img src={frontMatter.mainImageSrc} alt={frontMatter.mainImageAlt} />
    </Container>
  );
};

export default PostHeader;
