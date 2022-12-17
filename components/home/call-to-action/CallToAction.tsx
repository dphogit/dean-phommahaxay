import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react';
import { ContactButton, ResumeButton } from '../../common';
import { SectionIds } from '../../../common/routes';

const CallToAction = () => {
  return (
    <Box
      mb={['80px', null, '120px', '220px']}
      as="section"
      id={SectionIds.CALL_TO_ACTION}
    >
      <Card
        variant="filled"
        bgGradient="linear(to-r, gray.800, gray.700)"
        color="white"
        pt="90px"
        px={['24px', 0]}
        pb={['100px', '120px']}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={['stretch', 'center']}
        borderRadius={['0', null, null, '32px']}
        textAlign="center"
      >
        <Heading
          as="h5"
          variant={['h5xs', null, 'h5']}
          mb="12px"
          color="teal.300"
        >
          Peaked your curiosity?
        </Heading>
        <Heading as="h2" variant={['h2xs', null, 'h2']} mb="8px">
          Get to know me more.
        </Heading>
        <Text>Flick me an email, or have a read of my CV.</Text>
        <Flex mt="20px" gap="24px" flexDirection={['column', 'row']}>
          <ContactButton size="lg" bg="teal.500" />
          <ResumeButton
            size="lg"
            color="gray.200"
            borderColor="gray.200"
            fontWeight="bold"
            _hover={{ bg: 'gray.700', opacity: 0.9 }}
          />
        </Flex>
      </Card>
    </Box>
  );
};

export default CallToAction;
