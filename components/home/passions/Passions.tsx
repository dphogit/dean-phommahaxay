import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { PassionOutlinedCard } from './passion-outlined-card';
import { CoinIcon, FootballIcon, RunningIcon } from './card-icon';
import {
  ExternalRoutes,
  SectionIds,
  SocialRoutes,
} from '../../../common/routes';

const Passions = () => {
  return (
    <Box
      as="section"
      mb={['80px', null, '120px', '220px']}
      px={['24px', null, null, 0]}
      id={SectionIds.PASSIONS}
    >
      <Box maxWidth={['100%', null, '90%', '75%']} mx="auto" mb="40px">
        <Heading
          as="div"
          variant={['h5xs', null, 'h5']}
          textAlign="center"
          mx="auto"
          mb="12px"
          color={['teal.600', null, 'teal.500']}
        >
          It&apos;s all about balance
        </Heading>
        <Heading textAlign="center" as="h2" variant={['h2xs', null, 'h2']}>
          I like to get out and about.
        </Heading>
      </Box>
      <SimpleGrid
        columns={[1, null, null, 3]}
        width={['100%', null, '400px', 'auto']}
        mx="auto"
        spacing="20px"
      >
        <PassionOutlinedCard
          mainHeading="Probably training for a running race."
          smallHeading="Endurance"
          supportingText="I enjoy the challenge and science behind long distance road running."
          href={ExternalRoutes.MARATHON}
          IconComponent={<RunningIcon />}
          isExternal
        />
        <PassionOutlinedCard
          mainHeading="Love all things football."
          smallHeading="Sport"
          supportingText="Played for a club for the majority of my life. Now parked for my running hobby."
          href={ExternalRoutes.FOOTBALL_MANAGER}
          IconComponent={<FootballIcon />}
          isExternal
        />
        <PassionOutlinedCard
          mainHeading="Raised $1760 for Movember."
          smallHeading="Charity"
          href={SocialRoutes.MOVEMBER}
          IconComponent={<CoinIcon />}
          supportingText="Participating in various physical challenges for men’s mental health."
          isExternal
        />
      </SimpleGrid>
    </Box>
  );
};

export default Passions;
