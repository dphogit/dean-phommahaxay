import { extendTheme } from '@chakra-ui/react';
import fonts from './fonts';
import components from './components';

export default extendTheme({
  fonts: fonts.fontFamilies,
  textStyles: fonts.textStyles,
  components,
});
