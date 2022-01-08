import { atom } from "recoil";
import { createGlobalState } from "react-use";
const globalUser = atom({
  key: "globalUser",
  default: {},
});
// const getUser = async () => {
//   const response = await fetch("http://localhost:3000/api/authData");
//   const data = await response.json();
//   return data.sesh;
// };

const useGlobalUser = createGlobalState<object>({});

export { useGlobalUser, globalUser };
