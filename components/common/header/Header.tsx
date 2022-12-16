import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { CVButton } from '../cv-button';
import { ContactButton } from '../contact-button';
import { Logo } from '../logo';
import { PageRoutes } from '../../../common/routes';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useSSRMediaQuery } from '../../../hooks';
import { breakpoints } from '../../../theme';
import { MobileMenu } from './mobile-menu';
import type { MobileMenuItemProps } from './mobile-menu';

const MENU_ICON_LENGTH = 20;

const Header = () => {
  const query = `(min-width: ${breakpoints.sm})`;
  const [isLargerThanSM] = useSSRMediaQuery(query);

  const { isOpen, onToggle, onClose } = useDisclosure();

  const { asPath } = useRouter();

  const handleMenuItemClick = (href: string) => () => {
    if (asPath === href) {
      onClose();
    }
  };

  const MENU_ITEMS: MobileMenuItemProps[] = [
    {
      href: PageRoutes.HOME,
      text: 'Home',
      onClick: handleMenuItemClick(PageRoutes.HOME),
    },
    {
      href: PageRoutes.BLOG,
      text: 'Blog',
      onClick: handleMenuItemClick(PageRoutes.BLOG),
    },
  ];

  return (
    <Box
      as="nav"
      position="fixed"
      width="100%"
      top={0}
      bg="white"
      zIndex="sticky"
      boxShadow={isOpen ? 'none' : 'sm'}
      height={isOpen ? '100%' : 'auto'}
    >
      <Flex direction="column" py="16px" height="100%" position="relative">
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
                icon={
                  isOpen ? (
                    <Cross2Icon
                      height={MENU_ICON_LENGTH}
                      width={MENU_ICON_LENGTH}
                    />
                  ) : (
                    <HamburgerMenuIcon
                      height={MENU_ICON_LENGTH}
                      width={MENU_ICON_LENGTH}
                    />
                  )
                }
                variant="ghost"
                onClick={onToggle}
              />
            )}
          </Flex>
        </Container>
        {isOpen && <MobileMenu menuItems={MENU_ITEMS} />}
      </Flex>
    </Box>
  );
};

export default Header;
