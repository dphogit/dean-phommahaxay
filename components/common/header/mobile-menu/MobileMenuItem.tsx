import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export interface MobileMenuItemProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const MobileMenuItem = ({ href, text, onClick }: MobileMenuItemProps) => {
  return (
    <Link
      as={NextLink}
      href={href}
      fontSize="32px"
      fontWeight="bold"
      fontFamily="Ubuntu"
      color="blue.800"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default MobileMenuItem;
