import { Grid } from '@chakra-ui/react';
import type { GridProps } from '@chakra-ui/react';

const PageGrid = ({ children, ...props }: GridProps) => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" columnGap="20px" {...props}>
      {children}
    </Grid>
  );
};

export default PageGrid;
