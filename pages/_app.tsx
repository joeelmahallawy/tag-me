import { ChakraProvider } from "@chakra-ui/react";
import App, { AppProps } from "next/app";
import { UserProvider, useUser } from "@auth0/nextjs-auth0";
import Layout from "../components/layout";
import theme from "../utils/theme";
import React, { useEffect, useState } from "react";
import { RecoilRoot, useSetRecoilState, atom, useRecoilValue } from "recoil";
import { useGlobalUser } from "../lib/recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = useGlobalUser();

  useEffect(() => {
    // initialize user object globally
    (async function () {
      const response = await fetch("/api/authData");
      const data = await response.json();
      setUser(data);
    })();
  }, []);
  return (
    <RecoilRoot>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </UserProvider>
    </RecoilRoot>
  );
};

export default MyApp;
