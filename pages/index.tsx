import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Dean Phommahaxay</title>
      </Head>
      <Heading>Heading Text (Ubuntu)</Heading>
      <Text>Body Text (Inter)</Text>
    </div>
  );
}
