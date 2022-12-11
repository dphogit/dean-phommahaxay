import { ExpTab, ExpTabPanel } from './styled';
import { TabList, TabPanels, Tabs } from '@chakra-ui/react';

const ExpTabs = () => {
  return (
    <Tabs variant="soft-rounded">
      <TabList bg="gray.700" display="inline-flex" borderRadius="32px">
        <ExpTab>Segna</ExpTab>
        <ExpTab>Scott PHS</ExpTab>
        <ExpTab>AWS ECIP</ExpTab>
        <ExpTab>Side Project</ExpTab>
      </TabList>
      <TabPanels>
        <ExpTabPanel>Segna content</ExpTabPanel>
        <ExpTabPanel>Scott PHS content</ExpTabPanel>
        <ExpTabPanel>AWS ECIP content</ExpTabPanel>
        <ExpTabPanel>Side Project content</ExpTabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ExpTabs;
