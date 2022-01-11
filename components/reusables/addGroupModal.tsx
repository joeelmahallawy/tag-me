import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  useToast,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import addGroup from "../../helpers/addGroup";
import InitializeGroups from "../../helpers/getGroups";
import { AddNewGroupInputData, CurrentGroups } from "../../interfaces";

const AddGroupModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupData, setGroupData] = useState<AddNewGroupInputData>({
    name: "",
    numberOfMembers: 0,
    preferredSocialAccount: "",
  });
  const toast = useToast();
  const [currentGroups, setCurrentGroups] = useState<CurrentGroups[]>([]);

  useEffect(() => {
    InitializeGroups("15", setCurrentGroups);
  }, []);
  return (
    <>
      {currentGroups.map((group) => (
        <Center w="100%" mt="2rem" justifyContent="space-between">
          <Heading>{group.Name}</Heading>
          <Text>{group.MaxCap}</Text>
        </Center>
      ))}
      <Center w="100%" mt="5rem">
        <Button fontSize="2rem" p="2rem" onClick={onOpen}>
          Add new group
        </Button>
      </Center>

      <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="0.5%">
          <ModalHeader fontSize="1.5rem">Add new group</ModalHeader>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              addGroup(groupData, toast, onClose);
            }}
          >
            <ModalBody>
              <FormControl mt={3} isRequired>
                <FormLabel>Group name</FormLabel>
                <Input
                  placeholder="Spacebulls NFT degens"
                  onChange={(e) => {
                    setGroupData({ ...groupData, name: e.currentTarget.value });
                  }}
                />
              </FormControl>
              <FormControl mt={3} isRequired>
                <FormLabel>Group size</FormLabel>
                <RadioGroup
                  onChange={(e) => {
                    setGroupData({ ...groupData, numberOfMembers: Number(e) });
                  }}
                >
                  <Stack direction="row" spacing={5}>
                    <Radio value={"5"}>5</Radio>
                    <Radio value={"10"}>10</Radio>
                    <Radio value={"15"}>15</Radio>
                    <Radio value={"20"}>20</Radio>
                    <Radio value={"25"}>25</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl isRequired mt={3}>
                <FormLabel>Preferred social</FormLabel>
                <RadioGroup
                  onChange={(e) => {
                    setGroupData({ ...groupData, preferredSocialAccount: e });
                  }}
                >
                  <Stack spacing={5} direction="row">
                    <Radio value="Discord">Discord</Radio>
                    <Radio value="Twitter">Twitter</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter display="block">
              <Center color="red.500">
                Adding a new group will remove you from any current group you're
                in *
              </Center>
              <Flex mt={3} justifyContent="flex-end">
                <Button
                  _focus={{}}
                  _active={{ bg: "red.700" }}
                  _hover={{ bg: "red.600" }}
                  color="white"
                  colorScheme="red"
                  bg="red.500"
                  mr={3}
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button
                  _focus={{}}
                  _active={{ bg: "blue.700" }}
                  _hover={{ bg: "blue.600" }}
                  bg="blue.500"
                  color="white"
                  colorScheme="blue"
                  type="submit"
                >
                  Continue
                </Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddGroupModal;
