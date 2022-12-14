import { Flex, Stack } from '@chakra-ui/react';
import { ResumeButton } from '../../resume-button';
import { ContactButton } from '../../contact-button';
import MobileMenuItem from './MobileMenuItem';
import type { MobileMenuItemProps } from './MobileMenuItem';

interface MobileMenuProps {
  menuItems: MobileMenuItemProps[];
}

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  return (
    <Flex
      direction="column"
      flex={1}
      justifyContent="space-between"
      alignItems="stretch"
      pt="24px"
      px="24px"
      pb="16px"
    >
      <Stack spacing="16px">
        {menuItems.map((item) => (
          <MobileMenuItem key={item.href} {...item} />
        ))}
      </Stack>
      <Stack spacing="12px">
        <ResumeButton size="lg" />
        <ContactButton size="lg" />
      </Stack>
    </Flex>
  );
};

export default MobileMenu;
