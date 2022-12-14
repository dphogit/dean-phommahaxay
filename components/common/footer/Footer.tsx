import { Box, Container, Flex, Icon } from '@chakra-ui/react';
import { ExternalLink } from '../external-link';
import {
  EnvelopeClosedIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { ExternalRoutes } from '../../../common/routes';

const Footer = () => {
  return (
    <Box py="24px" as="footer" borderTop="1px solid" borderColor="gray.200">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <ExternalLink
            href={ExternalRoutes.GITHUB_REPOSITORY}
            display="flex"
            alignItems="center"
            lineHeight="28px"
          >
            <span>Designed & Built by Dean Phommahaxay</span>
            <Icon
              as={ExternalLinkIcon}
              sx={{ h: '16px', mx: '8px', w: '16px' }}
            />
          </ExternalLink>
        </Box>
        <Flex alignItems="center">
          <GitHubLogoIcon />
          <LinkedInLogoIcon />
          <TwitterLogoIcon />
          <EnvelopeClosedIcon />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
