import { Container } from '@chakra-ui/react';
import Head from 'next/head';
import { CallToAction, Experiences, Hero, Passions } from '../components/home';
import { Header, Footer } from '../components/common';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Dean Phommahaxay</title>
      </Head>
      <Header />
      <Container>
        <Hero />
        <Experiences />
        <Passions />
        <CallToAction />
      </Container>
      <Footer />
    </>
  );
}
