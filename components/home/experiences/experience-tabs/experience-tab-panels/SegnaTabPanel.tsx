import Image from 'next/image';
import { Link } from '@chakra-ui/react';
import SegnaSrc from '../../../../../public/media/experiences-segna.png';
import ExperienceTabPanel from './ExperienceTabPanel';

const SegnaTabPanel = () => {
  return (
    <ExperienceTabPanel
      media={
        <Image
          src={SegnaSrc}
          alt="Tech stack I used at Segna - React, TypeScript, Material UI, Storybook"
          height={306}
          width={360}
        />
      }
      period="Nov 2021 - Dec 2022"
      points={[
        <>
          Collaborate on responsive designs and lead the development of
          Segna&apos;s website iterations across product pivots using{' '}
          <Link>Next.js</Link>, <Link>TypeScript</Link>, <Link>Sanity CMS</Link>
          , <Link>Figma</Link> and <Link>Webflow</Link>.
        </>,
        <>
          Developing and scaling Segna&apos;s interactive website using{' '}
          <Link>React</Link>, <Link>TypeScript</Link> and{' '}
          <Link>Material UI</Link>
        </>,
        <>
          Building and maintaining a reusable <Link>npm</Link> UI component
          library using <Link>React</Link>, <Link>TypeScript</Link>,{' '}
          <Link>Rollup</Link> and <Link>Storybook</Link>.
        </>,
        <>
          Incorporate and integrate analytics across products to create insights
          on improving user experience using <Link>Mixpanel</Link>,{' '}
          <Link>Amplitude</Link> and <Link>Sentry</Link>.
        </>,
      ]}
      title={'Software Engineering Intern to Part-Timer @ Segna'}
    />
  );
};

export default SegnaTabPanel;
