import { Button } from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';

// TODO Link the CV and implement functionality once CV is ready.
const CVButton = (props: ButtonProps) => {
  return (
    <Button
      variant="outline"
      color="blue.800"
      borderColor="blue.800"
      fontWeight="normal"
      {...props}
    >
      Download CV
    </Button>
  );
};

export default CVButton;
