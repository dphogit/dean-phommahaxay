import { chakra, Tab } from '@chakra-ui/react';

const ExperienceTab = chakra(Tab, {
  baseStyle: {
    _selected: {
      bg: 'teal.600',
      color: 'white',
    },
    color: 'gray.400',
    fontWeight: 'bold',
    px: '24px',
    py: '12px',
    textTransform: 'uppercase',
  },
});

export default ExperienceTab;
