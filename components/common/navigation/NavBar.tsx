import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { CVButton } from '../cv-button';
import { ContactButton } from '../contact-button';
import { Logo } from '../logo';
import NextLink from 'next/link';
import { PageRoutes } from '../../../common/routes';

const NavBar = () => {
  return (
    <Box
      as="nav"
      py="16px"
      boxShadow="sm"
      position="sticky"
      width="100%"
      top={0}
      bg="white"
      zIndex="sticky"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Logo />
        </Box>
        <Flex columnGap="16px" alignItems="center" justifyContent="flex-end">
          <Link as={NextLink} href={PageRoutes.BLOG} mr="12px" color="blue.800">
            Blog
          </Link>
          <CVButton />
          <ContactButton />
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
