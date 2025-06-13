import Image from 'next/image';
import DatacomSrc from '../../../../../public/media/experiences-datacom.png';
import { ExternalRoutes } from '../../../../../common/routes';
import { ExternalLink } from '../../../../common';
import { ExperienceTabPanel } from './index';

const DatacomTabPanel = () => {
  return (
    <ExperienceTabPanel
      period="Dec 2023 - Current"
      title={
        <>
          Software Engineer
          <br />
          <ExternalLink href={ExternalRoutes.DATAPAY}>
            @ Datacom - Datapay
          </ExternalLink>
        </>
      }
      points={[
        <>
          Develop and maintain{' '}
          <ExternalLink href={ExternalRoutes.DATAPAY}>Datapay</ExternalLink>, a
          cloud-based payroll software serving 1 in 6 employees in New Zealand,
          and supporting enterprise clients from Australia.
        </>,
        <>
          Built and evolved the{' '}
          <ExternalLink href={ExternalRoutes.DATAPAY_WORKDAY}>
            Datapay-Workday Global Payroll Cloud Connector
          </ExternalLink>
          , enabling seamless 3rd-party payroll and HR integrations - a key
          factor in securing major enterprise clients.
        </>,
        <>
          Transition{' '}
          <ExternalLink href={ExternalRoutes.DATAPAY_API_REFERENCE}>
            public facing APIs and webhooks{' '}
          </ExternalLink>
          from beta to production-ready, leading the design and deliver of a
          webhooks dashboard that reduced support time and business OpEx.
        </>,
      ]}
      media={<Image src={DatacomSrc} alt="CSharp, Azure, SQL, JavaScript" />}
    />
  );
};

export default DatacomTabPanel;
