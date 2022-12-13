import React from 'react';
import { Icon } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/react';

type CardIconProps = {
  children: React.ReactNode;
} & IconProps;

const CardIcon = ({ children, ...props }: CardIconProps) => {
  return (
    <Icon
      h="100px"
      w="100px"
      transition="all 0.25s ease-out"
      fill="gray.500"
      {...props}
    >
      {children}
    </Icon>
  );
};

export default CardIcon;
