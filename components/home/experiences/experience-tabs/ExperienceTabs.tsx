import { TabList, TabPanels, Tabs } from '@chakra-ui/react';
import ExperienceTab from './ExperienceTab';
import ExperienceTabPanel from './ExperienceTabPanel';

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
        <ExperienceTabPanel>Segna content</ExperienceTabPanel>
        <ExperienceTabPanel>Scott PHS content</ExperienceTabPanel>
        <ExperienceTabPanel>AWS ECIP content</ExperienceTabPanel>
        <ExperienceTabPanel>Side Project content</ExperienceTabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTabs;
