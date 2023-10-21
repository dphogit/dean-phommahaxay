import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Tag,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image, { StaticImageData } from 'next/image';

export interface ProjectItemProps {
  heading: string;
  description: string;
  tags: string[];
  image: {
    src: StaticImageData;
    alt: string;
  };
  callToAction?: {
    href: string;
    text: string;
  };
}

const ProjectItem = ({
  callToAction,
  description,
  heading,
  image,
  tags,
}: ProjectItemProps) => {
  return (
    <Grid templateColumns={['1fr', null, null, '3fr 2fr']} columnGap="48px">
      <Card
        pos="relative"
        borderRadius="xl"
        borderColor="gray.300"
        variant="outline"
      >
        <Image
          src={image.src}
          alt={image.alt}
          style={{ borderRadius: 'inherit' }}
        />
      </Card>
      <Box pt={['24px', null, null, '16px']}>
        <Heading as="h3" variant={['h4xs', null, null, 'h4']} mb="16px">
          {heading}
        </Heading>
        <Text color="GrayText">{description}</Text>
        <Flex mt="16px" gap="12px" wrap="wrap">
          {tags.map((t) => (
            <Tag
              key={t}
              colorScheme="teal"
              variant="subtle"
              borderRadius="full"
              size="sm"
            >
              {t}
            </Tag>
          ))}
        </Flex>
        {callToAction && (
          <Box mt={['24px']}>
            <Button
              as="a"
              borderRadius="full"
              variant="outline"
              size={['md', null, null, 'sm']}
              colorScheme="teal"
              cursor="pointer"
              fontWeight="normal"
              href={callToAction.href}
              target="_blank"
              rel="noreferrer"
              rightIcon={<ExternalLinkIcon height={16} width={16} />}
            >
              {callToAction.text}
            </Button>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default ProjectItem;
