import Image from 'next/image';
import { Link } from '@chakra-ui/react';
import { ExperienceTabPanel } from './index';
import ScottSrc from '../../../../../public/media/experiences-scott.png';
import { ExternalRoutes } from '../../../../../common/routes';

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
          <Link href={ExternalRoutes.SCOTTPHS}>@ Scott PHS</Link>
        </>
      }
      points={[
        <>
          Contributed extensively to the development of a R&D warehouse
          management automation project using{' '}
          <Link href={ExternalRoutes.NODE}>Node.js</Link>,{' '}
          <Link href={ExternalRoutes.POSTGRESQL}>Postgres</Link>,{' '}
          <Link href={ExternalRoutes.EXPRESS}>Express</Link> and the{' '}
          <Link href={ExternalRoutes.PUG}>Pug HTML templating engine</Link>.
        </>,
        <>
          Automated assigned project management tasks involving PDF documents
          using <Link href={ExternalRoutes.PYTHON}>Python</Link>.
        </>,
        <>
          Standardizing and updating documentation for further reuse in the
          workplace using{' '}
          <Link href={ExternalRoutes.OFFICE_365}>Microsoft Office Tools</Link>.
        </>,
        <>
          Configured and documented the use of{' '}
          <Link href={ExternalRoutes.AUGMENTED_REALITY}>Augmented Reality</Link>{' '}
          headset technology for real-time communication between the company and
          client overseas as a COVID safe alternative of site work.
        </>,
      ]}
    />
  );
};

export default ScottTabPanel;
