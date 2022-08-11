import React from "react";
import { Container, Box, Heading, Icon, Text } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

const GetInTouch = () => {
  return (
    <Container maxW={["100%", "60%", "50%", "50%", "40%"]} my="3rem">
      <Heading textAlign="center" pt="2rem">
        Get In Touch
      </Heading>
      <Box
        p={["1rem", "1rem", "1.5rem", ".5rem"]}
        textAlign="center"
        boxShadow="0px 3px 17px 1px lightgray"
        borderRadius="6px"
        maxWidth="95%"
        minWidth="95%"
        my="1rem"
        _hover={{
          transform: "scale(1.05)",
          transition: "transform .2s;",
        }}
      >
        <Icon w="30px" h="30px" as={PhoneIcon} my="1rem"></Icon>
        <Heading size="md" mb="1rem">
          California
          {", "}
          USA
        </Heading>
        <Text mb="0.5rem">+1 925 818 1066</Text>
        <Text mb="0.5rem">alexis.rankin@geekybugs.com</Text>
        <Text mb="0.5rem">1333 Howe Ave, Sacramento</Text>
      </Box>
    </Container>
  );
};

export default GetInTouch;
