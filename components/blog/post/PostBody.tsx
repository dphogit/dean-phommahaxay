import {
  Code,
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
  h2: (props) => (
    <Heading
      as="h2"
      variant={['h3xs', null, null, 'h3']}
      mt="64px"
      {...props}
    />
  ),
  a: (props) => <Link color="blue.500" {...props} />,
  p: (props) => (
    <Text
      mt={['20px', '24px']}
      fontSize={['16px', '20px']}
      lineHeight="1.6"
      color="gray.700"
      {...props}
    />
  ),
  img: (props) => <Img my={['36px', '48px']} {...props} />,
  ul: (props) => <UnorderedList mb="48px" {...props} />,
  li: (props) => (
    <ListItem
      my="8px"
      fontSize={['16px', '20px']}
      lineHeight="1.6"
      color="gray.700"
      {...props}
    />
  ),
  code: (props) => <Code mx="2px" fontSize={['14px', '18px']} {...props} />,
};

interface PostBodyProps {
  mdxSource: MDXRemoteSerializeResult;
}

const PostBody = ({ mdxSource }: PostBodyProps) => {
  return (
    <Container
      maxWidth="container.md"
      mt={['40px', '60px']}
      px={[0, null, null, '16px']}
    >
      <MDXRemote {...mdxSource} components={components} />
    </Container>
  );
};

export default PostBody;
