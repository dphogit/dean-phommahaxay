import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { PassionOutlinedCard } from './passion-outlined-card';
import { CoinIcon, FootballIcon, PenIcon } from './card-icon';
import {
  ExternalRoutes,
  PageRoutes,
  SectionIds,
  SocialRoutes,
} from '../../../common/routes';

const Passions = () => {
  return (
    <Box as="section" mb="220px" px={['16px', 0]} id={SectionIds.PASSIONS}>
      <Box maxWidth={['100%', '75%']} mx="auto" mb="40px">
        <Heading
          as="h5"
          variant="h5"
          textAlign="center"
          mb="12px"
          color="teal.500"
        >
          It&apos;s all about balance
        </Heading>
        <Heading textAlign="center" as="h2" variant={['h2xs', 'h2']}>
          Important passions that help me strive for excellence.
        </Heading>
      </Box>
      <SimpleGrid columns={[1, 3]} spacing="20px">
        <PassionOutlinedCard
          mainHeading="Love all things football related."
          smallHeading="Sport"
          supportingText="Been playing since the age of 7. Train twice a week and play on weekends."
          href={ExternalRoutes.FOOTBALL_MANAGER}
          IconComponent={<FootballIcon />}
          isExternal
        />
        <PassionOutlinedCard
          mainHeading="Raised $1240 for Movember."
          smallHeading="Charity"
          href={SocialRoutes.MOVEMBER}
          IconComponent={<CoinIcon />}
          supportingText="Running and walking 100km across Movember for men’s mental health."
          isExternal
        />
        <PassionOutlinedCard
          mainHeading="Writing articles for self reflection."
          smallHeading="Creative"
          supportingText="I write blog posts to share and reflect on my experiences."
          href={PageRoutes.BLOG}
          IconComponent={<PenIcon />}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Passions;
