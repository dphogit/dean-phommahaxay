import { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import {
  CallToAction,
  Experiences,
  Hero,
  Passions,
  Projects,
} from '../components/home';
import { PageLayout } from '../components/common';

const Home: NextPage = () => {
  return (
    <PageLayout pageName="Home">
      <Container px={[0, null, null, '16px']}>
        <Hero />
        <Experiences />
        <Passions />
        <Projects />
        <CallToAction />
      </Container>
    </PageLayout>
  );
};

export default Home;
