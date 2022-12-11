import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react';
import ExperiencesMemoji from '../../../public/media/experiences-memoji.png';
import Image from 'next/image';
import ExpTabs from './ExpTabs';

const SUPPORTING_TEXT = `I've been fortunate enough to gain industry experience while completing my degree through projects completed in internships, part-time work and career programs.`;

const Experiences = () => {
  return (
    <Box as="section" pb="220px">
      <Card
        variant="filled"
        height="980px"
        p="80px"
        borderRadius="32px"
        bg="gray.800"
        color="white"
      >
        <Flex>
          <Box pr="40px">
            <Heading as="h6" variant="h6" mb="12px" color="teal.300">
              My software engineering journey so far
            </Heading>
            <Heading as="h2" variant="h2" mb="12px">
              Industry experiences have been my best teacher.
            </Heading>
            <Text>{SUPPORTING_TEXT}</Text>
          </Box>
          <Image
            src={ExperiencesMemoji}
            alt="Dean Phommahaxay Memoji avatar fist bumping towards reader."
            height={238}
            width={250}
          />
        </Flex>
        <ExpTabs />
      </Card>
    </Box>
  );
};

export default Experiences;
