import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useGlobalUser } from "../../../lib/recoil";

const Header = () => {
  const [user, setUser] = useGlobalUser();

  const SCREEN_WIDTH_BP = ["100%", "90%", "85%", "80%", "70%", "60%"];
  console.log("heres out user", user);
  console.log(Object.keys(user).length);
  return (
    <Center
      justifyContent="space-between"
      w={SCREEN_WIDTH_BP}
      p="2rem"
      m="0 auto"
    >
      (LOGO HERE)
      {Object.keys(user).length !== 0 ? (
        <Link href="/api/auth/logout">
          <Button>Log out</Button>
        </Link>
      ) : (
        <Link href="/api/auth/login">
          <Button>Login</Button>
        </Link>
      )}
    </Center>
  );
};
export default Header;
