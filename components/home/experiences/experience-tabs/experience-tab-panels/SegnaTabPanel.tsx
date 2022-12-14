import Image from 'next/image';
import SegnaSrc from '../../../../../public/media/experiences-segna.png';
import ExperienceTabPanel from './ExperienceTabPanel';
import { ExternalRoutes } from '../../../../../common/routes';
import { ExternalLink } from '../../../../common';

const SegnaTabPanel = () => {
  return (
    <ExperienceTabPanel
      media={
        <Image src={SegnaSrc} alt="React, TypeScript, Material UI, Storybook" />
      }
      period="Nov 2021 - Dec 2022"
      points={[
        <>
          Collaborate on responsive designs and lead the development of
          Segna&apos;s website iterations across product pivots using{' '}
          <ExternalLink href={ExternalRoutes.NEXT}>Next.js</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.TYPESCRIPT}>
            TypeScript
          </ExternalLink>
          , <ExternalLink href={ExternalRoutes.SANITY}>Sanity CMS</ExternalLink>
          , <ExternalLink href={ExternalRoutes.FIGMA}>Figma</ExternalLink> and{' '}
          <ExternalLink href={ExternalRoutes.WEBFLOW}>Webflow</ExternalLink>.
        </>,
        <>
          Developing and scaling Segna&apos;s platform using{' '}
          <ExternalLink href={ExternalRoutes.REACT}>React</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.TYPESCRIPT}>
            TypeScript
          </ExternalLink>{' '}
          and{' '}
          <ExternalLink href={ExternalRoutes.MATERIAL_UI}>
            Material UI
          </ExternalLink>
          . This includes building reusable components and code reviews.
        </>,
        <>
          Building and maintaining a reusable{' '}
          <ExternalLink href={ExternalRoutes.NPM}>npm</ExternalLink> UI
          component library using{' '}
          <ExternalLink href={ExternalRoutes.REACT}>React</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.TYPESCRIPT}>
            TypeScript
          </ExternalLink>
          , <ExternalLink href={ExternalRoutes.ROLLUP}>Rollup</ExternalLink> and{' '}
          <ExternalLink href={ExternalRoutes.STORYBOOK}>Storybook</ExternalLink>
          .
        </>,
        <>
          Integrate analytics and error monitoring across products to create
          insights on improving user experience using{' '}
          <ExternalLink href={ExternalRoutes.MIXPANEL}>Mixpanel</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.AMPLITUDE}>Amplitude</ExternalLink>{' '}
          and <ExternalLink href={ExternalRoutes.SENTRY}>Sentry</ExternalLink>.
        </>,
      ]}
      title={
        <>
          Software Engineering Intern to Part-Timer{' '}
          <ExternalLink href={ExternalRoutes.SEGNA}>@ Segna</ExternalLink>
        </>
      }
    />
  );
};

export default SegnaTabPanel;
