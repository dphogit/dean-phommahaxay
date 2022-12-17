import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  defaultProps: {
    variant: 'page',
  },
  variants: {
    page: {
      margin: '0 auto',
      maxWidth: '1140px',
    },
  },
});
