import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import GroupsOfTen from "./groupsOf10";
import GroupsOfFifteen from "./groupsOf15";
import GroupsOfTwenty from "./groupsOf20";
import GroupsOfTwentyFive from "./groupsOf25";
import GroupsOfFive from "./groupsOf5.tsx";
const TabsOfGroups = () => {
  return (
    <Tabs p="1.5%" variant="solid-rounded">
      <TabList>
        <Tab _focus={{}} w="50%">
          Groups of 5
        </Tab>
        <Tab _focus={{}} w="50%">
          Groups of 10
        </Tab>
        <Tab _focus={{}} w="50%">
          Groups of 15
        </Tab>
        <Tab _focus={{}} w="50%">
          Groups of 20
        </Tab>
        <Tab _focus={{}} w="50%">
          Groups of 25
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <GroupsOfFive />
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <GroupsOfTen />
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <GroupsOfFifteen />
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <GroupsOfTwenty />
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <GroupsOfTwentyFive />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default TabsOfGroups;
