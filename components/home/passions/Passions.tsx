import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { PassionOutlinedCard } from './passion-outlined-card';
import { CoinIcon, FootballIcon } from './card-icon';
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
          Important passions that help me strive for excellence.
        </Heading>
      </Box>
      <SimpleGrid
        columns={[1, null, null, 2]}
        width={['100%', null, '400px', 'auto']}
        mx="auto"
        spacing="20px"
      >
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
      </SimpleGrid>
    </Box>
  );
};

export default Passions;
