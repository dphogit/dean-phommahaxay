import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import { CallToAction, Experiences, Hero, Passions } from '../components/home';
import { NavBar } from '../components/common';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dean Phommahaxay</title>
      </Head>
      <NavBar />
      <Container>
        <Hero />
        <Experiences />
        <Passions />
        <CallToAction />
      </Container>
    </>
  );
}
