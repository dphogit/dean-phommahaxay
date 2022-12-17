import { TabList, TabPanels, Tabs } from '@chakra-ui/react';
import ExperienceTab from './ExperienceTab';
import {
  AWSTabPanel,
  ScottTabPanel,
  SegnaTabPanel,
  SideProjectTabPanel,
} from './experience-tab-panels';

const ExperienceTabs = () => {
  return (
    <Tabs variant="soft-rounded" mt={['32px', '20px']}>
      <TabList
        bg="gray.700"
        display={['flex', 'inline-flex']}
        flexDirection={['column', 'row']}
        borderRadius={['24px', '32px']}
      >
        <ExperienceTab>Segna</ExperienceTab>
        <ExperienceTab>AWS ECIP</ExperienceTab>
        <ExperienceTab>Scott PHS</ExperienceTab>
        <ExperienceTab>Side Project</ExperienceTab>
      </TabList>
      <TabPanels>
        <SegnaTabPanel />
        <AWSTabPanel />
        <ScottTabPanel />
        <SideProjectTabPanel />
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTabs;
