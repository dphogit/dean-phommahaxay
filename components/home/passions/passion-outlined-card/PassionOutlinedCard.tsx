import React, { useState } from 'react';
import { Box, Card, CardBody, Heading, Link, Text } from '@chakra-ui/react';

interface PassionOutlinedCardProps {
  mainHeading: string;
  smallHeading: string;
  supportingText: string;
  href: string;
  isExternal?: boolean;
  IconComponent: React.ReactNode;
}

const transition = 'all 0.15s ease-out';

const PassionOutlinedCard = ({
  smallHeading,
  mainHeading,
  href,
  isExternal,
  supportingText,
  IconComponent,
}: PassionOutlinedCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Link
      href={href}
      _hover={{ textDecoration: 'none' }}
      isExternal={isExternal}
    >
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variant="outline"
        height="320px"
        borderRadius="32px"
        borderColor="gray.300"
        transition={transition}
        _hover={{
          '& svg': {
            fill: 'teal.500',
            height: '70px',
            width: '70px',
          },
          boxShadow: 'xl',
          transform: 'scale(1.01)',
        }}
      >
        <CardBody
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>{IconComponent}</Box>
          <Box overflow="hidden">
            <Box
              transform={[
                'none',
                null,
                null,
                `translateY(${isHovered ? 0 : 60}px)`,
              ]}
              transition={transition}
              mb="8px"
              width="80%"
            >
              <Heading
                as="span"
                variant="h6"
                color={[
                  'teal.600',
                  null,
                  null,
                  isHovered ? 'teal.600' : 'gray.600',
                ]}
              >
                {smallHeading}
              </Heading>
              <Heading as="h3" variant="h4" mt="8px">
                {mainHeading}
              </Heading>
            </Box>
            <Text
              opacity={[1, null, null, isHovered ? 1 : 0]}
              transform={[
                'none',
                null,
                null,
                `translateY(${isHovered ? 0 : 80}px)`,
              ]}
              transition={transition}
              color="gray.600"
              minH="50px"
            >
              {supportingText}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PassionOutlinedCard;
