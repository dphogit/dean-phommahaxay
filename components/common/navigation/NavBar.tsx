import NextLink from 'next/link';
import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { Logo } from '../logo';
import { Pages } from '../../../common/routes';

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
        <Flex columnGap="32px">
          <Link as={NextLink} href={Pages.BLOG}>
            Blog
          </Link>
          <span>Download CV</span>
          <span>Contact Me</span>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
