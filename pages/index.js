import { Box, Container, Image } from "@chakra-ui/react";
import coverImg from "../images/medicalbilling-cover.jpg";
import IndustriesWeServe from "./home/IndustriesWeServe";
import ServicesWeSpecializeIn from "./home/ServicesWeSpecializeIn";

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
        <Box minH="70vh" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} />
      </Box>
      <Container maxW="90%">
        <IndustriesWeServe />
        <ServicesWeSpecializeIn />
      </Container>
    </main>
  );
};
export default Index;
