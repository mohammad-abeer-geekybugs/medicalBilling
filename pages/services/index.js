import { Box } from "@chakra-ui/react";
import React from "react";
import CycleManagement from "./CycleManagement";
import ServicesWeProvide from "./ServicesWeProvide";

const services = () => {
  return (
    <Box>
      <CycleManagement />
      <ServicesWeProvide />
    </Box>
  );
};
export default services;
