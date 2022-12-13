import { Box, Card, CardBody, Heading, Link } from '@chakra-ui/react';
import { FootballIcon } from '../card-icon';

interface PassionOutlinedCardProps {
  mainHeading: string;
  smallHeading: string;
  href: string;
}

const PassionOutlinedCard = ({
  smallHeading,
  mainHeading,
  href,
}: PassionOutlinedCardProps) => {
  return (
    <Link href={href} _hover={{ textDecoration: 'none' }}>
      <Card
        variant="outline"
        height="320px"
        borderRadius="32px"
        borderColor="gray.300"
        transition="all 0.2s ease-out"
        _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}
      >
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box h="100px" w="100px" position="relative">
            <FootballIcon />
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
    </Link>
  );
};

export default PassionOutlinedCard;
