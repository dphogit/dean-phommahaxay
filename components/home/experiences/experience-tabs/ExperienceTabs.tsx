import { TabList, TabPanels, Tabs } from '@chakra-ui/react';
import ExperienceTab from './ExperienceTab';
import {
  AWSTabPanel,
  DatacomTabPanel,
  ScottTabPanel,
  SegnaTabPanel,
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
        <ExperienceTab>Datacom</ExperienceTab>
        <ExperienceTab>Segna</ExperienceTab>
        <ExperienceTab>AWS ECIP</ExperienceTab>
        <ExperienceTab>Scott PHS</ExperienceTab>
      </TabList>
      <TabPanels>
        <DatacomTabPanel />
        <SegnaTabPanel />
        <AWSTabPanel />
        <ScottTabPanel />
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTabs;
