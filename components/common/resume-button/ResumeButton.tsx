import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';
import { PageRoutes } from '../../../common/routes';

const ResumeButton = (props: ButtonProps) => {
  return (
    <Button
      as={Link}
      href={PageRoutes.RESUME}
      target="rel"
      rel="noreferrer"
      variant="outline"
      color="blue.800"
      borderColor="blue.800"
      fontWeight="normal"
      {...props}
    >
      Resume
    </Button>
  );
};

export default ResumeButton;
