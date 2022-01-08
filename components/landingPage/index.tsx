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

const LandingPage = () => {
  return (
    <>
      <Center w="100vw" h={["50vh", "60vh", "65vh", "75vh", "80vh"]}>
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
      <Center p="1rem">
        <Center justifyContent="flex-end" w="50%">
          <Image
            w={["200px", "550px", "300px", "350px", "500px", "600px"]}
            h={["200px", "350px", "300px", "350px", "500px", "600px"]}
            src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDEvYmJmMjk0MjAtNWM4YS00MzQ0LWI4ZDktOGMyYTVjMmQ2YThmLmpwZw==.jpg"
            alt=""
          />
        </Center>
        <Text w="60%" p="5%" fontSize="1.5rem">
          Life rewards the early adopters. Which is not always easy with the
          whitelist requirments of new promising crypto projects. No longer will
          that stand in the way of your astronomical gains this year. With our
          platform you will be able to join groups of interesting and
          like-minded individuals and earn the referrals required to get on the
          whitelists so we can prosper together– so what are you waiting for?
          {/* Here's how it works  */}
        </Text>
      </Center>
    </>
  );
};
export default LandingPage;
