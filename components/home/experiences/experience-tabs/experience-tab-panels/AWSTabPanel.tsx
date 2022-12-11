import { ExperienceTabPanel } from './index';
import Image from 'next/image';
import AWSSrc from '../../../../../public/media/experiences-aws.png';
import { Link } from '@chakra-ui/react';
import { ExternalRoutes } from '../../../../../common/routes';

const AWSTabPanel = () => {
  return (
    <ExperienceTabPanel
      media={
        <Image
          src={AWSSrc}
          alt={'EC2 Linux, S3, Rekognition, Lambda and Cloud9'}
        />
      }
      period="Nov 2021 - Dec 2022"
      title={
        <>
          Participant of Early Careers Innovation Program{' '}
          <Link href={ExternalRoutes.AWS}>@ AWS</Link>
        </>
      }
      points={[
        <>
          Learning both technical and non-technical skills required for the
          cloud computing industry, committing 3 nights a week during semester.
        </>,
        <>
          Exposure and working with a range of{' '}
          <Link href={ExternalRoutes.AWS}>AWS cloud services</Link> in weekly
          technical labs, including{' '}
          <Link href={ExternalRoutes.AWS_EC2}>EC2 Linux</Link>,{' '}
          <Link href={ExternalRoutes.AWS_S3}>S3</Link> storage buckets,
          <Link href={ExternalRoutes.AWS_REKOGNITION}>Rekognition</Link>{' '}
          computer vision, <Link href={ExternalRoutes.AWS_LAMBDA}>Lambda</Link>{' '}
          serverless functions and{' '}
          <Link href={ExternalRoutes.AWS_CLOUD9}>Cloud9</Link> IDE.
        </>,
        <>
          Competed in the case competition regarding cloud migration benefits
          and using the cloud to achieve company growth objectives.
        </>,
        <>Networking and meeting lots of cool people from across the ditch!</>,
      ]}
    />
  );
};

export default AWSTabPanel;
