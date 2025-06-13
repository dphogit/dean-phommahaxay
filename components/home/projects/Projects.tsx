import { Box, Heading, VStack } from '@chakra-ui/react';
import { ProjectItem, ProjectItemProps } from './project-item';
import { ExternalRoutes, SectionIds } from '../../../common/routes';
import HaselSrc from '../../../public/media/hasel.png';
import ConstructQASrc from '../../../public/media/constructqa.png';
import ScaleMateSrc from '../../../public/media/scalemate.png';

const PROJECT_ITEMS: ProjectItemProps[] = [
  {
    image: {
      src: HaselSrc,
      alt: 'HASEL - Workstations Dashboard page',
    },
    heading: '🤖 HASEL Booking Portal',
    description:
      "Enhancing the University of Auckland's HASEL lab deep learning workstation booking portal by introducing new administrative features to enhance workstation management.",
    tags: [
      'React',
      'Express',
      'MongoDB',
      'Node.js',
      'Material UI',
      'Linux',
      'Agile/Scrum',
    ],
    callToAction: {
      href: ExternalRoutes.HASEL,
      text: 'Learn More',
    },
  },
  {
    image: {
      src: ConstructQASrc,
      alt: 'ConstructQA interface',
    },
    heading: '👷‍♂️ ConstructQA',
    description:
      'Implementation of a question-answering chatbot and search-engine for the NZ Building Code specifications as part of our final-year academic research project, utilizing a deep-learning methodology.',
    tags: [
      'React',
      'TypeScript',
      'Mantine UI',
      'Python',
      'Flask',
      'Hugging Face',
      'AI and Deep Learning',
    ],
    callToAction: {
      href: ExternalRoutes.CONSTRUCT_QA,
      text: 'Learn More',
    },
  },
  {
    image: {
      src: ScaleMateSrc,
      alt: 'ScaleMate - SPCA Branch Dashboard page',
    },
    heading: '🐶 ScaleMate',
    description:
      'Collaborative effort between Computer, Electrical, and Software Engineers on a final-year capstone project to create a real-time animal weight and growth management platform. This system aids in health and well-being by identifying issues and taking appropriate actions using sensors.',
    tags: [
      'React',
      'Express',
      'MongoDB',
      'Node.js',
      'Material UI',
      'TypeScript',
      'Raspberry Pi Pico W',
    ],
  },
];

const Projects = () => {
  return (
    <Box
      as="section"
      mb={['80px', null, null, '220px']}
      px={['24px', null, null, 0]}
      id={SectionIds.PROJECTS}
    >
      <Box mb={['48px', null, null, '96px']}>
        <Heading
          as="div"
          variant={['h5xs', null, 'h5']}
          textAlign="center"
          mx="auto"
          mb="12px"
          color={['teal.600', null, 'teal.500']}
        >
          Non-work related code
        </Heading>
        <Heading textAlign="center" as="h2" variant={['h2xs', null, 'h2']}>
          Some other cool stuff I&apos;ve worked on.
        </Heading>
      </Box>
      <VStack spacing={['72px', null, null, '96px']}>
        {PROJECT_ITEMS.map((item) => (
          <ProjectItem
            key={item.heading}
            description={item.description}
            heading={item.heading}
            image={item.image}
            tags={item.tags}
            callToAction={item.callToAction}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
