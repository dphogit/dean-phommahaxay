import Image from 'next/image';
import AurorSrc from '../../../../../public/media/experiences-auror.png';
import { ExternalRoutes } from "../../../../../common/routes";
import { ExternalLink } from "../../../../common";
import ExperienceTabPanel from "./ExperienceTabPanel";

const AurorTabPanel = () => {
  return (
    <ExperienceTabPanel
      period="Dec 2023 - Current"
      title={
        <>
          Software Engineer
          <br />
          <ExternalLink href={ExternalRoutes.AUROR}>
            @ Auror
          </ExternalLink>
        </>
      }
      points={[
        <>
          Develop and maintain the{" "}
          <ExternalLink href={ExternalRoutes.AUROR_CORE}>
            Auror platform
          </ExternalLink>
          , where incidents become intelligence, investigations come together,
          and high-risk offenders are surfaced to solve retail crime faster.
          Playing my part towards the mission of{" "}
          <ExternalLink href={ExternalRoutes.AUROR_MISSION}>
            50 in 5. Reducing violet crime by 50% in the next 5 years
          </ExternalLink>
          .
        </>,
        <>
          Engineering robust, scalable integrations and workflows{" "}
          <ExternalLink href={ExternalRoutes.AUROR_LE}>
            connecting LE agencies across the globe with Auror{" "}
          </ExternalLink>
          to accelerate reporting, evidence handlng and investigations.
        </>,
        <>
          Using modern AI tools and practices to accelerate the product
          delivery pipeline: requirements, feasability/discovery, development
          and deployment.
        </>,
      ]}
      media={<Image src={AurorSrc} alt="CSharp, SQL, React, TypeScript" />}
    />
  );
};

export default AurorTabPanel;
