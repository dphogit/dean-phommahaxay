import {
  chakra,
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

const StyledBlockQuote = chakra('blockquote', {
  baseStyle: {
    bg: 'gray.100',
    p: '16px',
    mt: '24px',
    borderRadius: '4px',

    '& > p': {
      mt: '0',
    },
  },
});

const components: MDXComponents = {
  h2: (props) => (
    <Heading as="h2" variant="h3xs" mt={['32px', '64px']} {...props} />
  ),
  h3: (props) => (
    <Heading
      as="h3"
      variant="h4"
      fontSize="1.25rem"
      mt={['20px', '36px']}
      {...props}
    />
  ),
  blockquote: ({ children, ...bqProps }) => (
    <StyledBlockQuote {...bqProps}>{children}</StyledBlockQuote>
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
  ul: (props) => <UnorderedList mb={['24px', '48px']} {...props} />,
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
