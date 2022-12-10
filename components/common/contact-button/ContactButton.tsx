import { Button } from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';
import { ExternalRoutes } from '../../../common/routes';

const ContactButton = (props: ButtonProps) => {
  return (
    <Button
      as="a"
      bg="gray.700"
      color="white"
      cursor="pointer"
      transition="all 0.1s ease-out"
      href={ExternalRoutes.EMAIL}
      _hover={{ opacity: 0.9 }}
      {...props}
    >
      Contact Me
    </Button>
  );
};

export default ContactButton;
