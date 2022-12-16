import { Grid } from '@chakra-ui/react';
import type { GridProps } from '@chakra-ui/react';

const PageGrid = ({ children, ...props }: GridProps) => {
  return (
    <Grid
      gridTemplateColumns={['repeat(4, 1fr)', 'repeat(12, 1fr)']}
      columnGap="20px"
      {...props}
    >
      {children}
    </Grid>
  );
};

export default PageGrid;
