import React, { ComponentProps, ElementType } from 'react';
import {
  Heading,
  Link,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Text,
  Th,
  Tr,
  UnorderedList,
  Td,
} from '@chakra-ui/react';
import Image from 'next/image';
import ReactMarkdown, { type ExtraProps } from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

const SCROLL_MARGIN_TOP = '100px';

type Components = {
  [Key in Extract<ElementType, string>]?: ElementType<
    ComponentProps<Key> & ExtraProps
  >;
};

const components: Components = {
  h1({ children, id }) {
    return (
      <Heading id={id} as="h1" scrollMarginTop={SCROLL_MARGIN_TOP}>
        {children}
      </Heading>
    );
  },

  h2({ children, id }) {
    return (
      <Heading
        id={id}
        as="h2"
        size="md"
        mt="32px"
        mb="16px"
        scrollMarginTop={SCROLL_MARGIN_TOP}
      >
        {children}
      </Heading>
    );
  },

  h3({ children, id }) {
    return (
      <Heading
        id={id}
        as="h3"
        size="sm"
        my="16px"
        scrollMarginTop={SCROLL_MARGIN_TOP}
      >
        {children}
      </Heading>
    );
  },

  p({ children }) {
    return <Text my="16px">{children}</Text>;
  },

  a({ children, href }) {
    return (
      <Link href={href} color="blue.500">
        {children}
      </Link>
    );
  },

  ol({ children }) {
    return (
      <OrderedList spacing="4px" my="4px">
        {children}
      </OrderedList>
    );
  },
  ul({ children }) {
    return (
      <UnorderedList spacing="4px" my="4px">
        {children}
      </UnorderedList>
    );
  },
  li({ children }) {
    return <ListItem>{children}</ListItem>;
  },

  img({ src, alt, title }) {
    if (!src) return null;
    return (
      <span style={{ position: 'relative' }}>
        <Image
          src={src}
          alt={alt || 'Markdown Image'}
          width={1200}
          height={800}
          title={title}
          sizes="(max-width: 768px) 100vw, 768px"
          style={{ borderRadius: 8 }}
        />
      </span>
    );
  },

  table({ children }) {
    return (
      <TableContainer>
        <Table size="sm">{children}</Table>
      </TableContainer>
    );
  },
  thead({ children, ...props }) {
    return <Thead {...props}>{children}</Thead>;
  },
  th({ children, ...props }) {
    return <Th {...props}>{children}</Th>;
  },
  tbody({ children, ...props }) {
    return <Tbody {...props}>{children}</Tbody>;
  },
  tr({ children, ...props }) {
    return <Tr {...props}>{children}</Tr>;
  },
  td({ children, ...props }) {
    return <Td {...props}>{children}</Td>;
  },
};

type MarkdownContentProps = {
  content: string;
};

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'append' }],
      ]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
