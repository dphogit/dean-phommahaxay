import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import components from './components';
import { breakpoints } from './breakpoints';

export default extendTheme({
  breakpoints,
  components,
  fonts: fonts.fontFamilies,
  textStyles: fonts.textStyles,
});

export { breakpoints, components, fonts };
