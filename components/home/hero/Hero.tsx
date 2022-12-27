import { ContactButton, PageGrid } from '../../common';
import { GridItem, Heading, Text } from '@chakra-ui/react';
import HeroMemoji from '../../../public/media/hero-memoji.png';
import Image from 'next/image';
import { SectionIds } from '../../../common/routes';
import { useSSRMediaQuery } from '../../../hooks';
import { breakpoints } from '../../../theme';

const INTRO_TEXT = `Final year Software Engineering student at the University of Auckland, New Zealand. Expertise in designing and building products for the web.`;

const Hero = () => {
  const query = [
    `(min-width: ${breakpoints.sm})`,
    `(min-width: ${breakpoints.md})`,
    `(min-width: ${breakpoints.lg})`,
  ];
  const [isLargerThanSM, isLargerThanMD, isLargerThanLG] =
    useSSRMediaQuery(query);

  const getImageWidth = (): number => {
    if (isLargerThanLG) return 360;
    if (isLargerThanMD) return 480;
    if (isLargerThanSM) return 360;
    return 288;
  };

  return (
    <PageGrid
      mt={['80px', null, '120px', '200px']}
      px={['24px', null, null, 0]}
      mb={['60px', null, '160px', '220px']}
      as="section"
      id={SectionIds.HERO}
      display={['flex', null, null, 'grid']}
      flexDirection={['column-reverse']}
    >
      <GridItem
        colSpan={7}
        mt={['24px', null, null, 0]}
        textAlign={[null, 'center', null, 'left']}
      >
        <Heading
          as="h1"
          variant={['h1xs', null, 'h1']}
          textTransform="uppercase"
          textAlign={['center', null, null, 'left']}
        >
          Dean <br /> Phommahaxay
        </Heading>
        <Text
          mt="16px"
          mb="24px"
          width={[null, null, '75%', '100%']}
          mx={[null, null, 'auto', 0]}
          textAlign={['left', 'center', null, 'left']}
        >
          {INTRO_TEXT}
        </Text>
        <ContactButton
          width={['100%', 'auto']}
          size={['lg', null, null, 'md']}
        />
      </GridItem>
      <GridItem colSpan={5}>
        <Image
          src={HeroMemoji}
          alt="Dean Phommahaxay Memoji avatar sitting at brown desktop with silver Macbook laptop."
          style={{
            margin: '0 auto',
            width: getImageWidth(),
            height: 'auto',
          }}
          priority
        />
      </GridItem>
    </PageGrid>
  );
};

export default Hero;
