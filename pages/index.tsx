import { Container } from '@chakra-ui/react';
import { CallToAction, Experiences, Hero, Passions } from '../components/home';
import { PageLayout } from '../components/common';

export default function Home() {
  return (
    <PageLayout pageName="Home">
      <Container px={[0, null, null, '16px']}>
        <Hero />
        <Experiences />
        <Passions />
        <CallToAction />
      </Container>
    </PageLayout>
  );
}
