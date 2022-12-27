import Image from 'next/image';
import { ExperienceTabPanel } from './index';
import AWSSrc from '../../../../../public/media/experiences-aws.png';
import { ExternalRoutes } from '../../../../../common/routes';
import { ExternalLink } from '../../../../common';

const AWSTabPanel = () => {
  return (
    <ExperienceTabPanel
      media={
        <Image
          src={AWSSrc}
          alt={'EC2 Linux, S3, Rekognition, Lambda and Cloud9'}
        />
      }
      period="Aug 2021 - Oct 2021"
      title={
        <>
          Participant of Early Careers Innovation Program{' '}
          <ExternalLink href={ExternalRoutes.AWS}>@ AWS</ExternalLink>
        </>
      }
      points={[
        <>
          Learning both technical and non-technical skills required for the
          cloud computing industry, committing 3 nights a week during semester.
        </>,
        <>
          Exposure and working with a range of{' '}
          <ExternalLink href={ExternalRoutes.AWS}>
            AWS cloud services
          </ExternalLink>{' '}
          in weekly technical labs, including{' '}
          <ExternalLink href={ExternalRoutes.AWS_EC2}>EC2 Linux</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.AWS_S3}>S3</ExternalLink> storage
          buckets,{' '}
          <ExternalLink href={ExternalRoutes.AWS_REKOGNITION}>
            Rekognition
          </ExternalLink>{' '}
          computer vision,{' '}
          <ExternalLink href={ExternalRoutes.AWS_LAMBDA}>Lambda</ExternalLink>{' '}
          serverless functions and{' '}
          <ExternalLink href={ExternalRoutes.AWS_CLOUD9}>Cloud9</ExternalLink>{' '}
          IDE.
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
