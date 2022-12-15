import {
  Box,
  chakra,
  Heading,
  keyframes,
  ListItem,
  TabPanel,
  UnorderedList,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const StyledTabPanel = chakra(TabPanel, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    mt: '36px',
    p: 0,
  },
});

const TitleHeading = chakra(Heading, {
  baseStyle: {
    '& > a': {
      color: 'teal.300',
    },
    '& > a:hover': {
      color: 'teal.400',
      textDecoration: 'none',
    },
  },
  defaultProps: {
    as: 'h3',
    variant: 'h3',
  },
});

const StyledListItem = chakra(ListItem, {
  baseStyle: {
    '& > a': {
      color: 'teal.300',
    },
    color: 'gray.300',
    fontSize: '1rem',
    lineHeight: '1.675rem',
  },
});

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const moveIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  
  35% {
    opacity: 1;
  }
  
  50% {
    transform: translateX(-2px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const createKey = (idx: number) => `point-${idx}`;

const getListItemAnimation = (idx: number) => {
  return `${moveIn} 500ms ease-out ${500 + idx * 150}ms both`;
};

interface ExperienceTabPanelProps {
  media: ReactNode;
  period: string;
  title: ReactNode;
  points: ReactNode[];
}

const ExperienceTabPanel = ({
  media,
  period,
  points,
  title,
}: ExperienceTabPanelProps) => {
  return (
    <StyledTabPanel>
      <Box flex={2}>
        <Heading as="p" variant="h6" mb="8px" color="gray.300">
          {period}
        </Heading>
        <TitleHeading>{title}</TitleHeading>
        <UnorderedList mt="20px" spacing="20px">
          {points.map((point, idx) => (
            <StyledListItem
              key={createKey(idx)}
              animation={getListItemAnimation(idx)}
            >
              {point}
            </StyledListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box
        flex={1}
        pl="72px"
        pb="16px"
        alignSelf="center"
        animation={`${fadeIn} 500ms ease-out 1500ms both`}
      >
        {media}
      </Box>
    </StyledTabPanel>
  );
};

export default ExperienceTabPanel;
