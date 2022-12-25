import {
  Container,
  Heading,
  Img,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h2: (props) => <Heading as="h2" variant="h3" {...props} mt="64px" />,
  a: (props) => <Link color="blue.500" {...props} />,
  p: (props) => (
    <Text
      mt="24px"
      fontSize="20px"
      lineHeight="1.6"
      color="gray.700"
      {...props}
    />
  ),
  img: (props) => <Img my="48px" {...props} />,
  ul: (props) => <UnorderedList mb="48px" {...props} />,
  li: (props) => (
    <ListItem
      my="8px"
      fontSize="20px"
      lineHeight="1.6"
      color="gray.700"
      {...props}
    />
  ),
};

interface PostBodyProps {
  mdxSource: MDXRemoteSerializeResult;
}

const PostBody = ({ mdxSource }: PostBodyProps) => {
  return (
    <Container maxWidth="container.md" mt="80px">
      <MDXRemote {...mdxSource} components={components} />
    </Container>
  );
};

export default PostBody;
