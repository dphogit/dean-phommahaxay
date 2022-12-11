import { chakra, Tab, TabPanel } from '@chakra-ui/react';

export const ExpTab = chakra(Tab, {
  baseStyle: {
    _selected: {
      bg: 'teal.500',
      color: 'white',
    },
    fontWeight: 'bold',
    px: '24px',
    py: '12px',
    textTransform: 'uppercase',
  },
});

export const ExpTabPanel = chakra(TabPanel, {
  baseStyle: {
    mt: '36px',
    p: 0,
  },
});
