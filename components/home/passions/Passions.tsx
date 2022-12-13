import { Box, Heading } from '@chakra-ui/react';

const Passions = () => {
  return (
    <Box as="section" pb="220px">
      <Box maxWidth="75%" mx="auto">
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
    </Box>
  );
};

export default Passions;
