import { Box } from '@chakra-ui/react';
import type { BlogPagePreviewPost } from '../../../lib/blog/types';

interface PostProps {
  post: BlogPagePreviewPost;
}

const PostPreview = ({ post }: PostProps) => {
  return (
    <Box>
      <Box>{post.category}</Box>
      <Box>{post.title}</Box>
      <Box>{post.description}</Box>
      <Box>
        {post.publishedAt} | {post.readMins} mins read
      </Box>
    </Box>
  );
};

export default PostPreview;
