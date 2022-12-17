import { Link } from '@chakra-ui/react';
import type { LinkProps } from '@chakra-ui/react';

const ExternalLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link isExternal {...props}>
      {children}
    </Link>
  );
};

export default ExternalLink;
