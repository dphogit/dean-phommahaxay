import { Box, Heading } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Heading lineHeight={1}>
      <Box as="span" color="gray.700">
        D
      </Box>
      <Box as="span" color="gray.400">
        P
      </Box>
    </Heading>
  );
};

export default Logo;
