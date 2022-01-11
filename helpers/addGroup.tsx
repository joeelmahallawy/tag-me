import { AddNewGroupInputData } from "../interfaces";

const addGroup = async (
  groupData: AddNewGroupInputData,
  toast: any,
  onClose: Function
) => {
  try {
    const request = await fetch(`/api/addGroup`, {
      method: "POST",
      body: JSON.stringify(groupData),
    });
    if (!request.ok) throw new Error("Could not add group");
    onClose();
    return toast({
      title: "Group added!",
      description: "You've successfully created your group..",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  } catch (err) {
    alert(err.message);
  }
};
export default addGroup;
