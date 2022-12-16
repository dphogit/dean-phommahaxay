import { Box, Container, Flex, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { CVButton } from '../cv-button';
import { ContactButton } from '../contact-button';
import { Logo } from '../logo';
import { PageRoutes } from '../../../common/routes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useSSRMediaQuery } from '../../../hooks';
import { breakpoints } from '../../../theme';

const Header = () => {
  const query = `(min-width: ${breakpoints.sm})`;
  const [isLargerThanSM] = useSSRMediaQuery(query);

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
          <Link
            as={NextLink}
            href={PageRoutes.HOME}
            _hover={{ textDecoration: 'none' }}
          >
            <Logo />
          </Link>
        </Box>
        <Flex columnGap="16px" alignItems="center" justifyContent="flex-end">
          {isLargerThanSM ? (
            <>
              <Link
                as={NextLink}
                href={PageRoutes.BLOG}
                mr="12px"
                color="blue.800"
              >
                Blog
              </Link>
              <CVButton />
              <ContactButton />
            </>
          ) : (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerMenuIcon height={20} width={20} />}
              variant="ghost"
              size="sm"
            />
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
