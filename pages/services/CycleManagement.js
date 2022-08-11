import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import revenueCycle from "../../images/revenueCycle.jpg";
import revenueCycleManagement from "../../images/RevenueCycleManagement.png";

const CycleManagement = () => {
  return (
    <>
      <Container maxW={["100%", "", "", "85%"]} my="2rem">
        <Heading textAlign="center" my="2rem">
          Revenue Cycle Management Services
        </Heading>
        <Flex direction={["column", "column", "column", "row"]}>
          <Box
            width={["100%", "100%", "100%", "50%"]}
            mr={["", "", "", "1.2rem"]}
            textAlign="justify"
            fontSize={["16px", "17px", "18px", "18px", "18px"]}
            lineHeight={["1.7rem", "1.8rem", "1.9rem", "2rem"]}
          >
            <Text color="#242424">
              Documentation and billing errors can be costly. Keeping up with
              the changing regulations has become ever so complicated and
              tedious. Analytix manages your billing and collections to capture
              missed revenue opportunities and streamline your revenue cycle
              with the help of our exceptional revenue cycle management
              services.
            </Text>
            <br />
            <Text>
              Our medical billing team combines advanced technology and industry
              expertise to reduce the administrative burden on your staff and
              boost both revenue and productivity. Our all-in-one billing
              solution helps you improve and optimize revenue cycle efficiency,
              so you are collecting every earned dollar.
            </Text>
          </Box>
          <Box width={["100%", "100%", "100%", "50%"]}>
            <Image width="100%" src={revenueCycle.src} borderRadius="6px" />
          </Box>
        </Flex>
      </Container>
      <Box bgColor="gray.100">
        <Container maxW="75%" py="4rem">
          <Heading textAlign="center">
            Revenue Cycle Management Flow Chart
          </Heading>
          <Image pt="2rem" src={revenueCycleManagement.src} />
        </Container>
      </Box>
    </>
  );
};
export default CycleManagement;
