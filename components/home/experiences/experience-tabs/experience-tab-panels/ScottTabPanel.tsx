import Image from 'next/image';
import { ExperienceTabPanel } from './index';
import ScottSrc from '../../../../../public/media/experiences-scott.png';
import { ExternalRoutes } from '../../../../../common/routes';
import { ExternalLink } from '../../../../common';

const ScottTabPanel = () => {
  return (
    <ExperienceTabPanel
      media={
        <Image src={ScottSrc} alt={'Node.js, Python, Postgres, Office 365'} />
      }
      period="Nov 2020 - Feb 2021"
      title={
        <>
          General Engineering Summer Intern{' '}
          <ExternalLink href={ExternalRoutes.SCOTTPHS}>
            @ Scott PHS
          </ExternalLink>
        </>
      }
      points={[
        <>
          Contributed extensively to the development of a R&D warehouse
          management automation project using{' '}
          <ExternalLink href={ExternalRoutes.NODE}>Node.js</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.POSTGRESQL}>Postgres</ExternalLink>
          , <ExternalLink href={ExternalRoutes.EXPRESS}>Express</ExternalLink>{' '}
          and the{' '}
          <ExternalLink href={ExternalRoutes.PUG}>
            Pug HTML templating engine
          </ExternalLink>
          .
        </>,
        <>
          Automated assigned project management tasks involving PDF documents
          using <ExternalLink href={ExternalRoutes.PYTHON}>Python</ExternalLink>
          .
        </>,
        <>
          Standardizing and updating documentation for further reuse in the
          workplace using{' '}
          <ExternalLink href={ExternalRoutes.OFFICE_365}>
            Microsoft Office Tools
          </ExternalLink>
          .
        </>,
        <>
          Configured and documented the use of{' '}
          <ExternalLink href={ExternalRoutes.AUGMENTED_REALITY}>
            Augmented Reality
          </ExternalLink>{' '}
          headset technology for real-time communication between the company and
          client overseas as a COVID safe alternative of site work.
        </>,
      ]}
    />
  );
};

export default ScottTabPanel;
