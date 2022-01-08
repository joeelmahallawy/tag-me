import Link from "next/link";
import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { useGlobalUser } from "../lib/recoil";
import {
  Button,
  Center,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import LandingPage from "../components/landingPage";

const IndexPage = () => {
  const [user, setUser] = useGlobalUser();
  //   useEffect(() => {
  //     //
  //   }, [user]);
  console.log("heres the user from index.ts", user.user);

  return user.user ? (
    <Tabs variant="solid-rounded">
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
          <p>one</p>
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <p>two!</p>
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <p>three!</p>
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <p>twfouro!</p>
        </TabPanel>
        <TabPanel h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
          <p>five!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  ) : (
    <LandingPage />
  );
  //

  // <Center h="100vh" w="100vw">
  //   <Spinner
  //     thickness="4px"
  //     speed="0.65s"
  //     emptyColor="gray.200"
  //     color="blue.500"
  //     size="xl"
  //   />
  // </Center>
};

export default IndexPage;
