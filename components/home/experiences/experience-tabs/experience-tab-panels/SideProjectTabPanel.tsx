import Image from 'next/image';
import { ExperienceTabPanel } from './index';
import SideProjectSrc from '../../../../../public/media/experiences-side-project.png';
import { ExternalRoutes } from '../../../../../common/routes';
import { ExternalLink } from '../../../../common';

const SideProjectTabPanel = () => {
  return (
    <ExperienceTabPanel
      media={
        <Image
          src={SideProjectSrc}
          alt="AI Hub home page and eight puzzle solver page"
        />
      }
      period="Whenever I feel like it - motivation comes and goes"
      title={
        <>
          Curating what I&apos;ve learnt both in AI and web dev{' '}
          <ExternalLink href={ExternalRoutes.AI_HUB}>@ AI Hub</ExternalLink>
        </>
      }
      points={[
        <>
          A webapp curating basically everything I&apos;ve learnt in academic AI
          and industry web dev using{' '}
          <ExternalLink href={ExternalRoutes.REACT}>React</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.TYPESCRIPT}>
            TypeScript
          </ExternalLink>
          , <ExternalLink href={ExternalRoutes.VITE}>Vite</ExternalLink> and{' '}
          <ExternalLink href={ExternalRoutes.CHAKRA_UI}>Chakra UI</ExternalLink>
          .
        </>,
        <>
          Solving combinatorics optimization problems using AI search techniques
          which includes generic algorithms such as{' '}
          <ExternalLink href={ExternalRoutes.A_STAR}>A*</ExternalLink>,{' '}
          <ExternalLink href={ExternalRoutes.BFS}>BFS</ExternalLink> and{' '}
          <ExternalLink href={ExternalRoutes.DFS}>DFS</ExternalLink>.
        </>,
        <>
          Assuring quality of generic search algorithm implementations through
          unit testing using the{' '}
          <ExternalLink href={ExternalRoutes.JEST}>
            Jest Javascript testing framework
          </ExternalLink>
          .
        </>,
        <>
          Visualize and solve the{' '}
          <ExternalLink href={ExternalRoutes.EIGHT_PUZZLE}>
            8 Puzzle Problem
          </ExternalLink>{' '}
          using provided algorithms and heuristics which can be configured by
          the user.
        </>,
      ]}
    />
  );
};

export default SideProjectTabPanel;
