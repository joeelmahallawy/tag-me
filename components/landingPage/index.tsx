import {
  Center,
  Button,
  Image,
  Flex,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Carousel from "../carousel";

const LandingPage = () => {
  return (
    <>
      <Center w="100vw" h={["50vh", "60vh", "70vh", "80vh", "90vh"]}>
        <Center flexDir="column" gap={10}>
          <Text
            bgGradient="linear(to-r, orange.500, pink.600)"
            color="white"
            bgClip="text"
            fontSize="9xl"
            fontWeight="500"
          >
            TagMe
          </Text>
          <Link href="/api/auth/login">
            <Button
              bgGradient="linear(to-bl,orange.500,red.500)"
              fontSize="2rem"
              bg="pink.700"
              _hover={{ bg: "pink.800" }}
              _active={{ bg: "pink.900" }}
              _focus={{}}
              p="2rem"
            >
              Find a group
            </Button>
          </Link>
        </Center>
      </Center>
      <Center flexDir="column" p="1rem">
        <Center flexDir="column" justifyContent="flex-end">
          <Heading fontFamily="Arial" fontSize="4rem" mb="3rem">
            Tired of seeing whitelist requirements like these?
          </Heading>
          <Carousel />
        </Center>
        <Center flexDir="column" justifyContent="flex-end">
          <Heading fontFamily="Arial" fontSize="4rem" mb="3rem">
            And bot messages like these?
          </Heading>
          <Carousel />
        </Center>
        <Text w="60%" p="5%" fontSize="1.5rem">
          As the rise of NFTs continue, we've find ourselves surrounded by tons
          of projects, whether it be good or bad. Trying to find good projects
          is no easy task, and when you do, there's always a whitelist that
          requires you to invite 10+ people to their discord server. Whether
          your the person who makes bots send discord invites to random people,
          or the person who recieves the bot's messages, you're in the right
          place. TagMe is THE platform to connect you with other NFT traders and
          invite each other to discord servers to get on that whitelist of the
          project you've been dreaming of. It's really simple, join a group,
          exchange socials, start inviting group members and chat about projects
          you're interested in.
        </Text>
      </Center>
    </>
  );
};
export default LandingPage;
