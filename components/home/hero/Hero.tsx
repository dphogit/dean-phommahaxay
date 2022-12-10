import { ContactButton, PageGrid } from '../../common';
import { GridItem, Heading, Text } from '@chakra-ui/react';
import HeroMemoji from '../../../public/media/hero-memoji.png';
import Image from 'next/image';

const INTRO_TEXT = `I'm a final year Software Engineering student at the University of Auckland, New Zealand. My expertise involves designing and building products with practical experience in a Y combinator backed startup.`;

const Hero = () => {
  return (
    <PageGrid pt="120px" pb="220px">
      <GridItem colSpan={7}>
        <Heading as="h1" variant="h1" textTransform="uppercase">
          Dean <br /> Phommahaxay
        </Heading>
        <Text mt="16px" mb="24px">
          {INTRO_TEXT}
        </Text>
        <ContactButton />
      </GridItem>
      <GridItem colSpan={5}>
        <Image
          src={HeroMemoji}
          alt="Dean Phommahaxay Memoji avatar sitting at brown desktop with silver Macbook laptop."
          height={450}
          width={360}
          style={{ margin: '0 auto' }}
        />
      </GridItem>
    </PageGrid>
  );
};

export default Hero;
