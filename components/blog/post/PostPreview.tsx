import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import type { BlogPagePreviewPost } from '../../../lib/blog/types';
import Image from 'next/image';

interface PostProps {
  post: BlogPagePreviewPost;
}

const PostPreview = ({ post }: PostProps) => {
  const publishedAtAndReadMins = `${post.publishedAt} | ${post.readMins} min read`;

  return (
    <Box as="article">
      <Box position="relative" height="320px">
        <Image src={post.mainImageSrc} alt={post.title} fill />
      </Box>
      <Stack spacing="8px" mt="16px">
        <Heading as="h6" variant="h6" color="teal.500">
          {post.category}
        </Heading>
        <Heading as="h4" variant="h4">
          {post.title}
        </Heading>
        <Text color="gray.500">{post.description}</Text>
        <Text color="gray.500" fontSize="14px">
          {publishedAtAndReadMins}
        </Text>
      </Stack>
    </Box>
  );
};

export default PostPreview;
