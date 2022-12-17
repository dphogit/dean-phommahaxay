import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
  variants: {
    h1xs: {
      fontSize: '2.5rem',
    },
    h1: {
      fontSize: '4rem',
    },

    h2xs: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
    h2: {
      fontSize: '3rem',
      lineHeight: '4rem',
    },

    h3xs: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '2.25rem',
    },

    h4: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },

    h5xs: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '1.25rem',
      textTransform: 'uppercase',
    },

    h6: {
      fontSize: '1rem',
      textTransform: 'uppercase',
    },
  },
});
