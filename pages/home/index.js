import React from "react";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import coverImg from "../../images/medicalbilling-cover.jpg";
import IndustriesWeServe from "./IndustriesWeServe";
import ServicesWeSpecializeIn from "./ServicesWeSpecializeIn";
import RevenueCycle from "./RevenueCycle";
const themeColor = { color: "#e96c05" };

const Home = () => {
  return (
    <>
      <Box
        minH="70vh"
        bgImage={coverImg.src}
        opacity="55%"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Box minH="70vh" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <Container maxW="40%">
            <Center color="white">
              <Heading size="4xl" mt="30%" textAlign="center">
                Crush the <span style={themeColor}>friction</span> that's
                holding healthcare back.
              </Heading>
            </Center>
          </Container>
        </Box>
      </Box>
      <IndustriesWeServe />
      <ServicesWeSpecializeIn />
      <RevenueCycle />
    </>
  );
};

export default Home;
