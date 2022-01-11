import React, { useEffect } from "react";
import LandingPage from "../components/landingPage";
import Tabs from "../components/tabs";
import { globalUser } from "../lib/recoil";
import { useRecoilValue } from "recoil";

const IndexPage = () => {
  const user = useRecoilValue(globalUser);

  return user ? <Tabs /> : <LandingPage />;
};

export default IndexPage;
