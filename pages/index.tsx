import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Dean Phommahaxay</title>
      </Head>
      <Heading variant="h1">Heading Text (H1)</Heading>
      <Heading variant="h2">Heading Text (H2)</Heading>
      <Heading variant="h3">Heading Text (H3)</Heading>
      <Heading variant="h4">Heading Text (H4)</Heading>
      <Heading variant="h5">Heading Text (H5)</Heading>
      <Heading variant="h6">Heading Text (H6)</Heading>
      <Text>Body Text</Text>
    </div>
  );
}
