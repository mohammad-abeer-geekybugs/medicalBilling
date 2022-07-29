import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import coverImg from "../images/medicalbilling-cover.jpg";
import IndustriesWeServe from "./home/IndustriesWeServe";
import ServicesWeSpecializeIn from "./home/ServicesWeSpecializeIn";

const themeColor = { color: "#e96c05" };

const Index = () => {
  return (
    <main>
      <Box
        minH="70vh"
        bgImage={coverImg.src}
        opacity="55%"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        // clipPath="polygon(0 0,100% 0, 100% 100%, 0 calc(100% - 50px))"
      >
        <Box minH="70vh" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <Container>
            <Center color="white">
              <Heading size="3xl">
                Crush the <span style={themeColor}>friction</span> that's
                holding healthcare back.
              </Heading>
            </Center>
          </Container>
        </Box>
      </Box>
      <Container maxW="90%">
        <IndustriesWeServe />
        <ServicesWeSpecializeIn />
      </Container>
    </main>
  );
};
export default Index;
