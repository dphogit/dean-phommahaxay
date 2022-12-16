import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react';
import { MobileMenuItemProps } from '../mobile-menu';

type UseMobileMenuItems = Omit<MobileMenuItemProps, 'onClick'>[];

/**
 * Hook to handle setting up the mobile menu items with appropriate
 * onClick handlers to be used in the Header component.
 */
const useMobileMenu = (items: UseMobileMenuItems) => {
  const { onClose, ...useDisclosureValues } = useDisclosure();

  const { asPath } = useRouter();

  /**
   * Moving to a different page automatically closes the mobile menu.
   * This deals with the case where user clicks on a link to the same page
   * they currently are on, without this, the mobile menu won't close.
   */
  const closeMenuIfSamePath = (href: string) => () => {
    if (asPath === href) {
      onClose();
    }
  };

  return {
    ...useDisclosureValues,
    onClose,
    menuItems: items.map((item) => ({
      ...item,
      onClick: closeMenuIfSamePath(item.href),
    })),
  };
};

export default useMobileMenu;
