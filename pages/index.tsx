import { Container, keyframes } from '@chakra-ui/react';
import { CallToAction, Experiences, Hero, Passions } from '../components/home';
import { PageLayout } from '../components/common';

const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  
  50% {
    opacity: 1;
    transform: translateY(-2px);
  }
  
  100% {
    transform: translateY(0);
  }
`;

const animation = `${fadeSlideIn} 600ms ease-out`;

export default function Home() {
  return (
    <PageLayout pageName="Home">
      <Container animation={animation} px={[0, '16px']}>
        <Hero />
        <Experiences />
        <Passions />
        <CallToAction />
      </Container>
    </PageLayout>
  );
}
