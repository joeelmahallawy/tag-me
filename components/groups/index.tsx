import {
  Box,
  Button,
  Center,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CurrentGroups } from "../../interfaces";

const Groups = ({ group, index }: { group: CurrentGroups; index: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box key={index}>
      <Center
        borderRadius={10}
        _hover={{ bg: "gray.600", cursor: "pointer" }}
        onClick={onOpen}
        bg="gray.700"
        p="1.5%"
        w="100%"
        mt="2rem"
        justifyContent="space-between"
      >
        <Heading>{group.Name}</Heading>
        <Text fontSize="2xl">
          {`${group.currentNumberOfUsers} / ${group.MaxCap}`}
        </Text>
      </Center>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="4xl">{group.Name}</ModalHeader>
          <ModalBody>here's where all the conte is</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Groups;
