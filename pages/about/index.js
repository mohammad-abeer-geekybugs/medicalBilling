import React from "react";
import { Divider } from "@chakra-ui/react";
import About from "./About";
import WhyMB from "./WhyMB";
import Leaders from "./Leaders";
const about = () => {
  return (
    <>
      <About />
      <WhyMB />
      <Leaders />
      <Divider borderColor="gray" />
    </>
  );
};

export default about;
