import { BlogPagePreviewPost } from '../../../lib/blog/types';
import { SimpleGrid } from '@chakra-ui/react';
import { PostPreview } from '../post';

interface LatestPostsProps {
  latestPosts: BlogPagePreviewPost[];
}

const LatestPosts = ({ latestPosts }: LatestPostsProps) => {
  return (
    <SimpleGrid columns={[1, null, null, 2]} spacing="20px" mx="auto">
      {latestPosts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </SimpleGrid>
  );
};

export default LatestPosts;
