import {
  Box,
  chakra,
  Heading,
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

const createKey = (idx: number) => `point-${idx}`;

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
        {/* TODO Add custom bullet point icon and styling */}
        <UnorderedList mt="20px" spacing="20px">
          {points.map((point, idx) => (
            <StyledListItem key={createKey(idx)}>{point}</StyledListItem>
          ))}
        </UnorderedList>
      </Box>
      <Box flex={1} pl="72px" pb="16px" alignSelf="center">
        {media}
      </Box>
    </StyledTabPanel>
  );
};

export default ExperienceTabPanel;