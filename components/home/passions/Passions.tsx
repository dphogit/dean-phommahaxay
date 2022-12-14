import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { PassionOutlinedCard } from './passion-outlined-card';
import { CoinIcon, FootballIcon, PenIcon } from './card-icon';
import { PageRoutes, SectionIds } from '../../../common/routes';

const Passions = () => {
  return (
    <Box as="section" mb="220px" id={SectionIds.PASSIONS}>
      <Box maxWidth="75%" mx="auto" mb="40px">
        <Heading
          as="h5"
          variant="h5"
          textAlign="center"
          mb="12px"
          color="teal.500"
        >
          It&apos;s all about balance
        </Heading>
        <Heading textAlign="center" as="h2" variant="h2">
          Important passions that help me strive for excellence.
        </Heading>
      </Box>
      <SimpleGrid columns={3} spacing="20px">
        {/* TODO Add links to relevant pages when ready
              - Football link to blog post
              - Passion link to Mospace or blog post
              - Writing link to blog page
         */}
        <PassionOutlinedCard
          mainHeading="Love all things football related."
          smallHeading="Sport"
          supportingText="Been playing since the age of 7. Train twice a week and play on weekends."
          href="#"
          IconComponent={<FootballIcon />}
        />
        <PassionOutlinedCard
          mainHeading="Raised $1241 for Movember."
          smallHeading="Charity"
          href="#"
          IconComponent={<CoinIcon />}
          supportingText="Running and walking 100km across Movember for men’s mental health."
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
