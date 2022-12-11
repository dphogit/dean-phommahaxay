import { TabList, TabPanels, Tabs } from '@chakra-ui/react';
import ExperienceTab from './ExperienceTab';
import { AWSTabPanel, SegnaTabPanel } from './experience-tab-panels';

const ExperienceTabs = () => {
  return (
    <Tabs variant="soft-rounded">
      <TabList bg="gray.700" display="inline-flex" borderRadius="32px">
        <ExperienceTab>Segna</ExperienceTab>
        <ExperienceTab>AWS ECIP</ExperienceTab>
        <ExperienceTab>Scott PHS</ExperienceTab>
        <ExperienceTab>Side Project</ExperienceTab>
      </TabList>
      <TabPanels>
        {/* TODO Extract tab panels and add external links */}
        <SegnaTabPanel />
        <AWSTabPanel />
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTabs;
