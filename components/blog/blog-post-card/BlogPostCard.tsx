import { Card, CardBody, Heading, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { formatPublishDate } from '../../../common/dates';
import { BlogPostMetaData } from '../../../lib/blog';

type BlogPostProps = {
  post: BlogPostMetaData;
};

const BlogPostCard = ({ post }: BlogPostProps) => {
  const router = useRouter();

  function createHrefToPost(slug: string) {
    return `${router.pathname}/${slug}`;
  }

  return (
    <Link
      as={NextLink}
      href={createHrefToPost(post.slug)}
      _hover={{ textDecoration: 'none' }}
    >
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
          <Heading
            as="h2"
            size="md"
            mb="4px"
            style={{ lineClamp: 1, WebkitLineClamp: 1, overflow: 'hidden' }}
          >
            {post.title}
          </Heading>
          <Text color="GrayText" fontSize="sm">
            {formatPublishDate(post.date)}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
