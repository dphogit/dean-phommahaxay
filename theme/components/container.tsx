import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  defaultProps: {
    variant: 'page',
  },
  variants: {
    page: {
      maxWidth: '1140px',
      margin: '0 auto',
    },
  },
});
