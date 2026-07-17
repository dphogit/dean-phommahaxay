import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface HeaderLinkProps {
  children: React.ReactNode;
  href: string;
}

const HeaderLink = ({ children, href }: HeaderLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      as={NextLink}
      href={href}
      color={isActive ? 'blue.500' : 'gray.600'}
      fontWeight="bold"
      mt="4px"
      fontSize="sm"
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
