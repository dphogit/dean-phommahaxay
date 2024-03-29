import React from 'react';
import Head from 'next/head';
import { Header } from '../header';
import { Footer } from '../footer';

interface PageLayoutProps {
  children: React.ReactNode;
  pageName: string;
}

const PageLayout = ({ children, pageName }: PageLayoutProps) => {
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
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
