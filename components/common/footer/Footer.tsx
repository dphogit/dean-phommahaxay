import { Box, chakra, Container, Icon, Stack } from '@chakra-ui/react';
import { ExternalLink } from '../external-link';
import {
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { ExternalRoutes, SocialRoutes } from '../../../common/routes';

const transition = 'all 0.15s ease-out';

const SocialIcon = chakra(Icon, {
  baseStyle: {
    _hover: { opacity: 1 },
    height: '24px',
    opacity: 0.5,
    transition,
    width: '24px',
  },
});

const Footer = () => {
  return (
    <Box py="24px" as="footer" borderTop="1px solid" borderColor="gray.200">
      <Container
        display="flex"
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        alignItems="center"
        px={['24px', null, null, '16px']}
        gap={['12px', 0]}
      >
        <Box>
          <ExternalLink
            href={ExternalRoutes.GITHUB_REPOSITORY}
            display="flex"
            alignItems="center"
            lineHeight="28px"
            opacity={0.75}
            transition={transition}
            _hover={{ opacity: 1 }}
          >
            <span>Designed & Built by Dean Phommahaxay</span>
            <Icon
              as={ExternalLinkIcon}
              sx={{ h: '16px', mx: '8px', w: '16px' }}
            />
          </ExternalLink>
        </Box>
        <Stack direction="row" alignItems="center" spacing="16px">
          <ExternalLink href={SocialRoutes.GITHUB}>
            <SocialIcon as={GitHubLogoIcon} />
          </ExternalLink>
          <ExternalLink href={SocialRoutes.LINKEDIN}>
            <SocialIcon as={LinkedInLogoIcon} />
          </ExternalLink>
          <ExternalLink href={SocialRoutes.TWITTER}>
            <SocialIcon as={TwitterLogoIcon} />
          </ExternalLink>
          <ExternalLink href={SocialRoutes.EMAIL}>
            <SocialIcon as={EnvelopeClosedIcon} />
          </ExternalLink>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
