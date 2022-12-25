import { Box, Heading, Img, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import type { BlogPagePreviewPost } from '../../../lib/blog/types';
import { PageRoutes } from '../../../common/routes';

interface PostProps {
  post: BlogPagePreviewPost;
}

const PostPreview = ({ post }: PostProps) => {
  const href = `${PageRoutes.BLOG}/${post.slug}`;
  const publishedAtAndReadMins = `${post.publishedAt} | ${post.readMins} min read`;

  return (
    <Box as="article">
      <Link
        as={NextLink}
        href={href}
        transition="opacity 0.15s ease-out"
        _hover={{ textDecoration: 'none', opacity: 0.75 }}
      >
        <Img src={post.mainImageSrc} alt={post.mainImageAlt} />
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
      </Link>
    </Box>
  );
};

export default PostPreview;
