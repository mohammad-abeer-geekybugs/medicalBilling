import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";
import coverImg from "../../images/contactImg.jpg";

const contact = () => {
  return (
    <Box>
      <Box
        minH={["40vh", "50vh", "60vh", "70vh"]}
        bgImage={coverImg.src}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Box
          minH={["40vh", "50vh", "60vh", "80vh"]}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <Heading pt="16%" textAlign="center" color="white">
            Contact Us
          </Heading>
        </Box>
      </Box>

      <ContactForm />
      <GetInTouch />
    </Box>
  );
};

export default contact;
