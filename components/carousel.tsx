import Slider from "react-perfect-slider";
import { Center, Image, Button } from "@chakra-ui/react";
import SpaceBullsImg from "../attachments/spacebullswhitelist.png";
import C01Image from "../attachments/c01whitelist.png";
import React from "react";
import MDaoWhiteListImg from "../attachments/mdaowhitelist.png";
const Carousel = () => (
  <Slider
    autoplay={true}
    autoplayDuration={4000}
    transitionDuration={1500}
    renderControls={(next, previous) => [
      <Center m={3} gap={3} key={Math.random()}>
        <Button
          bg="red.500"
          _hover={{ bg: "red.600" }}
          _focus={{}}
          _active={{ bg: "red.700" }}
          onClick={previous}
        >
          Previous
        </Button>
        <Button
          bg="blue.600"
          _hover={{ bg: "blue.700" }}
          _focus={{}}
          _active={{ bg: "blue.800" }}
          onClick={next}
        >
          Next
        </Button>
      </Center>,
    ]}
  >
    <Center mb={10}>
      <Image
        src={SpaceBullsImg.src}
        w={["200px", "400px", "500px", "600px", "700px", "800px"]}
        h={["200px", "400px", "500px", "600px", "700px", "800px"]}
      />
    </Center>
    <Center mb={10}>
      <Image
        src={C01Image.src}
        w={["300px", "800px", "1000px", "1200px", "1400px", "1600px"]}
        h={["150px", "300px", "450px", "600px", "700px", "800px"]}
      />
    </Center>
    <Center mb={10}>
      <Image
        src={MDaoWhiteListImg.src}
        w={["275px", "550px", "687.5px", "825px", "962.5px", "1100px"]}
        h={["200px", "400px", "500px", "600px", "700px", "800px"]}
      />
    </Center>
    {/* <Center mb={10}>
      <Image
        src={WhiteListImage.src}
        w={["200px", "400px", "500px", "600px", "700px", "800px"]}
        h={["200px", "400px", "500px", "600px", "700px", "800px"]}
      />
    </Center>  */}
  </Slider>
);

export default Carousel;
