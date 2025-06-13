import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react';
import ExperiencesMemoji from '../../../public/media/experiences-memoji.png';
import Image from 'next/image';
import { ExperienceTabs } from './experience-tabs';
import { SectionIds } from '../../../common/routes';
import { useSSRMediaQuery } from '../../../hooks';
import { breakpoints } from '../../../theme';

const HEADING = `Where I've Been and What I've Done.`;
const SUPPORTING_TEXT = `Building real products, working across teams, and solving meaningful problems have shaped how I think and build as an engineer today.`;

const Experiences = () => {
  const query = `(min-width: ${breakpoints.md})`;
  const [isLargerThanMd] = useSSRMediaQuery(query);

  return (
    <Box
      as="section"
      mb={['60px', null, '120px', '220px']}
      id={SectionIds.EXPERIENCE}
    >
      <Card
        variant="filled"
        minHeight={['auto', '980px']}
        px={['24px', null, null, '80px']}
        py={['60px', null, '80px']}
        borderRadius={[0, null, null, '32px']}
        bg="gray.800"
        color="white"
      >
        <Flex alignItems={[null, null, 'center', 'flex-start']}>
          <Box pr={[0, null, '20px', '120px']}>
            <Heading
              as="span"
              variant={['h5xs', null, 'h5']}
              color="teal.300"
              mb="12px"
            >
              Software Engineering
            </Heading>
            <Heading
              as="h2"
              variant={['h2xs', null, 'h2']}
              mb={['20px', '12px']}
            >
              {HEADING}
            </Heading>
            <Text color="gray.300">{SUPPORTING_TEXT}</Text>
          </Box>
          {isLargerThanMd && (
            <Image
              src={ExperiencesMemoji}
              alt="Dean Phommahaxay Memoji avatar fist bumping towards reader."
              style={{ width: '250px', height: 'auto' }}
              priority
            />
          )}
        </Flex>
        <ExperienceTabs />
      </Card>
    </Box>
  );
};

export default Experiences;
