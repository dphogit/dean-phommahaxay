import { ContactButton, PageGrid } from '../../common';
import { GridItem, Heading, Text } from '@chakra-ui/react';
import HeroMemoji from '../../../public/media/hero-memoji.png';
import Image from 'next/image';
import { SectionIds } from '../../../common/routes';
import { useSSRMediaQuery } from '../../../hooks';
import { breakpoints } from '../../../theme';

const INTRO_TEXT = `Final year Software Engineering student at the University of Auckland, New Zealand. Expertise in designing and building products for the web.`;

const Hero = () => {
  const query = `(max-width: ${breakpoints.sm})`;
  const [isLargerThanSM] = useSSRMediaQuery(query);

  return (
    <PageGrid
      mt={['80px', '200px']}
      px={['16px']}
      mb="220px"
      as="section"
      id={SectionIds.HERO}
      display={['flex', 'grid']}
      flexDirection={['column-reverse']}
    >
      <GridItem colSpan={7} textAlign={['center', 'left']} mt={['24px', 0]}>
        <Heading
          as="h1"
          variant={['h1xs', null, 'h1']}
          textTransform="uppercase"
        >
          Dean <br /> Phommahaxay
        </Heading>
        <Text mt="16px" mb="24px">
          {INTRO_TEXT}
        </Text>
        <ContactButton width={['100%', 'auto']} size={['lg', 'md']} />
      </GridItem>
      <GridItem colSpan={5}>
        <Image
          src={HeroMemoji}
          alt="Dean Phommahaxay Memoji avatar sitting at brown desktop with silver Macbook laptop."
          height={isLargerThanSM ? 360 : 450}
          width={isLargerThanSM ? 288 : 360}
          style={{ margin: '0 auto' }}
        />
      </GridItem>
    </PageGrid>
  );
};

export default Hero;
