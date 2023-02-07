import { Box, Container, Flex, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ResumeButton } from '../resume-button';
import { ContactButton } from '../contact-button';
import { Logo } from '../logo';
import { PageRoutes } from '../../../common/routes';
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useSSRMediaQuery } from '../../../hooks';
import { breakpoints } from '../../../theme';
import { MobileMenu } from './mobile-menu';
import { useMobileMenu } from './hooks';
import type { UseMobileMenuItem } from './hooks';

const MENU_ICON_LENGTH = 20;

const MOBILE_MENU_ITEMS: UseMobileMenuItem[] = [
  {
    text: 'Home',
    href: PageRoutes.HOME,
  },
  {
    text: 'Blog',
    href: PageRoutes.BLOG,
  },
];

const Header = () => {
  const query = `(min-width: ${breakpoints.sm})`;
  const [isLargerThanSM] = useSSRMediaQuery(query);

  const { isOpen, onToggle, menuItems } = useMobileMenu(MOBILE_MENU_ITEMS);

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
            {isLargerThanSM ? (
              <>
                <ResumeButton />
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
        {isOpen && <MobileMenu menuItems={menuItems} />}
      </Flex>
    </Box>
  );
};

export default Header;
