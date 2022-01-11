import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { globalUser } from "../../../lib/recoil";

const Header = () => {
  const user = useRecoilValue(globalUser);
  const SCREEN_WIDTH_BP = ["100%", "90%", "85%", "80%", "70%", "60%"];

  return (
    <Center
      justifyContent="space-between"
      w={SCREEN_WIDTH_BP}
      p="2rem"
      m="0 auto"
    >
      (LOGO HERE)
      {user ? (
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
