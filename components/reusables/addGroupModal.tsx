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
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AddNewGroupInputData } from "../../interfaces";

const AddGroupModal = () => {
  const [groupData, setGroupData] = useState<AddNewGroupInputData>({
    name: "",
    numberOfMembers: 0,
    preferredSocialAccount: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
            onSubmit={(e) => {
              e.preventDefault();
              console.log(groupData);
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
              <FormControl isRequired mt={3}>
                <FormLabel>Group size</FormLabel>
                <NumberInput placeholder="20" min={0} max={25} precision={0}>
                  <NumberInputField
                    placeholder="10"
                    onChange={(e) => {
                      const roundVal = (val: string): number =>
                        Math.round(parseFloat(val));
                      setGroupData({
                        ...groupData,
                        numberOfMembers: roundVal(e.currentTarget.value),
                      });
                    }}
                  />
                </NumberInput>
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
                in.
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

{
  /* <Center>
                Are you sure you want to add another group? You will be removed
                from any current group you're in.
              </Center> */
}
