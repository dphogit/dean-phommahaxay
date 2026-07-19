import React from 'react';
import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import { Header } from '../header';
import { Footer } from '../footer';

interface PageLayoutProps {
  children: React.ReactNode;
  pageName: string;
  disableContainer?: boolean;
}

const PageLayout = ({
  children,
  pageName,
  disableContainer,
}: PageLayoutProps) => {
  const pageTitle = `${pageName} | Dean Phommahaxay`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Dean Phommahaxay's personal website"
        />
      </Head>
      <Header />
      {disableContainer ? (
        children
      ) : (
        <Container
          pt={['112px', null, null, '128px']}
          pb={['64px']}
          px={['24px', null, null, '16px']}
        >
          {children}
        </Container>
      )}
      <Footer />
    </>
  );
};

export default PageLayout;
