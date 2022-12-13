import { Box, Card, CardBody, Heading } from '@chakra-ui/react';

interface PassionOutlinedCardProps {
  mainHeading: string;
  smallHeading: string;
}

const PassionOutlinedCard = ({
  smallHeading,
  mainHeading,
}: PassionOutlinedCardProps) => {
  return (
    <Card
      variant="outline"
      height="320px"
      borderRadius="32px"
      borderColor="gray.300"
    >
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box h="100px" w="100px" position="relative">
          Icon goes here
        </Box>
        <Box width="80%">
          <Heading as="h6" variant="h6" mb="12px" color="gray.500">
            {smallHeading}
          </Heading>
          <Heading as="h4" variant="h4">
            {mainHeading}
          </Heading>
        </Box>
      </CardBody>
    </Card>
  );
};

export default PassionOutlinedCard;
