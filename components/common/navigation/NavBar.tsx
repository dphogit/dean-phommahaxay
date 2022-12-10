import NextLink from 'next/link';
import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { Logo } from '../logo';
import { PageRoutes } from '../../../common/routes';
import { ContactButton } from '../contact-button';

const NavBar = () => {
  return (
    <Box as="nav" py="16px" boxShadow="sm">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Logo />
        </Box>
        <Flex columnGap="32px" alignItems="center" justifyContent="flex-end">
          <Link as={NextLink} href={PageRoutes.BLOG}>
            Blog
          </Link>
          <span>Download CV</span>
          <ContactButton />
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
