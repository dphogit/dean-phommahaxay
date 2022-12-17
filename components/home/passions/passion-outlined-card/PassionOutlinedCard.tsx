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
            height: '65px',
            width: '65px',
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
                as="h6"
                variant="h6"
                mb="12px"
                color={[
                  'teal.500',
                  null,
                  null,
                  isHovered ? 'teal.500' : 'gray.500',
                ]}
              >
                {smallHeading}
              </Heading>
              <Heading as="h4" variant="h4">
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
              color="gray.500"
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
