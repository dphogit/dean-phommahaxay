import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownContentProps = {
  content: string;
};

type MarkdownImageProps = {
  src?: string;
  alt?: string;
  title?: string;
};

const components = {
  img({ src, alt, title }: MarkdownImageProps) {
    if (!src) return null;
    return (
      <Box position="relative">
        <Image
          src={src}
          alt={alt || 'Markdown Image'}
          title={title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </Box>
    );
  },
};

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
