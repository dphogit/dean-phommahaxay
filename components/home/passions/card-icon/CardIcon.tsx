import React from 'react';
import { Icon } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/react';

type CardIconProps = {
  children: React.ReactNode;
} & IconProps;

const CardIcon = ({ children, ...props }: CardIconProps) => {
  return (
    <Icon
      h={['65px', null, '80px', '100px']}
      w={['65px', null, '80px', '100px']}
      transition="all 0.15s ease-out"
      fill={['teal.500', null, null, 'gray.500']}
      {...props}
    >
      {children}
    </Icon>
  );
};

export default CardIcon;
