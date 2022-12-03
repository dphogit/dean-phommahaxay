import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
