import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react';
import ExperiencesMemoji from '../../../public/media/experiences-memoji.png';
import Image from 'next/image';
import { ExperienceTabs } from './experience-tabs';
import { SectionIds } from '../../../common/routes';
import { useSSRMediaQuery } from '../../../hooks';
import { breakpoints } from '../../../theme';

const SUPPORTING_TEXT = `While completing my degree through projects, I've completed internships, part-time work and career programs.`;

const Experiences = () => {
  const query = `(min-width: ${breakpoints.sm})`;
  const [isLargerThanSM] = useSSRMediaQuery(query);

  return (
    <Box as="section" mb="220px" id={SectionIds.EXPERIENCES_AND_PROJECTS}>
      <Card
        variant="filled"
        minHeight={['auto', '980px']}
        px={['24px', '80px']}
        py={['48px', '80px']}
        borderRadius={[0, '32px']}
        bg="gray.800"
        color="white"
      >
        <Flex>
          <Box pr={[0, '120px']}>
            <Heading
              as="h5"
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
              Industry experiences have been my best teacher.
            </Heading>
            <Text color="gray.300">{SUPPORTING_TEXT}</Text>
          </Box>
          {isLargerThanSM && (
            <Image
              src={ExperiencesMemoji}
              alt="Dean Phommahaxay Memoji avatar fist bumping towards reader."
              height={238}
              width={250}
            />
          )}
        </Flex>
        <ExperienceTabs />
      </Card>
    </Box>
  );
};

export default Experiences;
