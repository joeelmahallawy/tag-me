import { ChakraProvider } from "@chakra-ui/react";
import App, { AppContext, AppProps } from "next/app";
import { UserProvider, useUser } from "@auth0/nextjs-auth0";
import Layout from "../components/layout";
import theme from "../utils/theme";
import React, { useEffect, useState } from "react";
import { RecoilRoot, useSetRecoilState, atom, useRecoilValue } from "recoil";
import { globalUser, useGlobalUser } from "../lib/recoil";
import { DiscordAuthUser } from "../interfaces";

// { user }: { user: DiscordAuthUser }
// props
const MyApp = (props) => {
  return (
    <UserProvider>
      <RecoilRoot
        initializeState={({ set }) => {
          set(globalUser, props.user);
        }}
      >
        <ChakraProvider theme={theme}>
          <Layout>
            <props.Component {...props.pageProps} />
          </Layout>
        </ChakraProvider>
      </RecoilRoot>
    </UserProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  // get app initial props (component and pageProps)
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/stats`, {
    headers: { Cookie: appContext.ctx.req.headers.cookie },
  });
  // get user's authenticated data from auth endpoint
  const userData = await res.text();
  if (!userData) return { ...appProps, user: null };
  else {
    const user = JSON.parse(userData);
    return { ...appProps, user: user };
  }
};

export default MyApp;
