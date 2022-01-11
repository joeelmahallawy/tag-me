import { CurrentGroups } from "../interfaces";

const InitializeGroups = async (
  groupSize: string,
  setCurrentGroups: Function
) => {
  try {
    const req = await fetch(`/api/getGroups?groupsOf=${groupSize}`);
    if (!req.ok) throw new Error("Could not fetch groups");
    const response = await req.json();
    setCurrentGroups([...response]);
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
};

export default InitializeGroups;
