import { Box, Container, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ResumeButton } from '../resume-button';
import { ContactButton } from '../contact-button';
import { Logo } from '../logo';
import { PageRoutes } from '../../../common/routes';

const Header = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      width="100%"
      top={0}
      bg="white"
      zIndex="sticky"
      boxShadow="sm"
    >
      <Flex direction="column" py="16px" height="100%" position="relative">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={['24px', null, null, '16px']}
        >
          <Box>
            <Link
              as={NextLink}
              href={PageRoutes.HOME}
              _hover={{ textDecoration: 'none' }}
            >
              <Logo />
            </Link>
          </Box>
          <Flex columnGap="16px" alignItems="center" justifyContent="flex-end">
            <ResumeButton />
            <ContactButton />
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
};

export default Header;
