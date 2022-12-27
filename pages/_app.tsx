import '@fontsource/inter';
import '@fontsource/ubuntu';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ChakraProvider } from '@chakra-ui/provider';
import theme from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <Analytics />
    </>
  );
}
