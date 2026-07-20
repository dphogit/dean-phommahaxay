import { Card, CardBody, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { formatPublishDate } from '../../../common/dates';
import { BlogPostMetaData } from '../../../lib/blog';

type BlogPostProps = {
  post: BlogPostMetaData;
};

function useCreateHrefToPost(slug: string) {
  const router = useRouter();
  return `${router.pathname}/${slug}`;
}

function formatSubtext(post: BlogPostMetaData) {
  const publishDate = formatPublishDate(post.date);
  const timeToReadMins = Math.ceil(post.readingTimeStats.minutes);
  return `${publishDate} · ${timeToReadMins} min read`;
}

const BlogPostCard = ({ post }: BlogPostProps) => {
  const href = useCreateHrefToPost(post.slug);

  return (
    <Link as={NextLink} href={href} _hover={{ textDecoration: 'none' }}>
      <Card
        position="relative"
        variant="outline"
        borderRadius="md"
        transition="all 0.15s ease-out"
        _hover={{ boxShadow: 'md', transform: 'scale(1.005)' }}
      >
        <Image
          src={post.image.src}
          alt={post.image.alt}
          sizes="(max-width: 768px) 100vw, 33vw"
          width={1200}
          height={800}
          style={{
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
          }}
        />
        <CardBody>
          <Heading as="h2" size="md" mb="4px" noOfLines={1}>
            {post.title}
          </Heading>
          <Text color="GrayText" fontSize="sm">
            {formatSubtext(post)}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
