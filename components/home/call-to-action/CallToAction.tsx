import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react';
import { ContactButton, CVButton } from '../../common';

const CallToAction = () => {
  return (
    <Box mb="220px" as="section">
      <Card
        variant="filled"
        bgGradient="linear(to-r, gray.800, gray.700)"
        color="white"
        pt="90px"
        pb="120px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="32px"
      >
        <Heading as="h5" variant="h5" mb="12px" color="teal.300">
          Peaked your curiosity?
        </Heading>
        <Heading as="h2" variant="h2" mb="8px">
          Get to know me more.
        </Heading>
        <Text>Flick me an email, or have a read of my CV.</Text>
        <Flex mt="20px" gap="24px">
          <ContactButton size="lg" bg="teal.500" />
          <CVButton
            size="lg"
            color="white"
            borderColor="white"
            _hover={{ bg: 'gray.600', opacity: 0.9 }}
          />
        </Flex>
      </Card>
    </Box>
  );
};

export default CallToAction;
