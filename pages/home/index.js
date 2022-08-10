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
        bgImage={coverImg.src}
        opacity="85%"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Box style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}>
          <Container maxW={["80%", "65%", "60%", "40%"]}>
            <Center color="white">
              <Box my={["2rem", "4rem", "6rem", "8rem"]}>
                <Heading size={["lg", "xl", "2xl", "3xl"]} textAlign="center">
                  Crush the <span style={themeColor}>friction</span> that's
                  holding healthcare back.
                </Heading>
              </Box>
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
