import React from "react";
import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import ourMissing from "../../images/our-mission.jpg";
import ourValues from "../../images/our-values.jpg";
import ourVision from "../../images/our-vision.jpg";

const textStyle = {
  textAlign: "justify",
  fontSize: "1.2rem",
  lineHeight: "2rem",
  color: "whitesmoke",
};
const about = () => {
  return (
    <>
      <Box paddingY="5rem" bgColor={"#242424"}>
        <Heading textAlign="center" color="whitesmoke">
          About{" "}
          <span style={{ fontWeight: "600", textDecoration: "underline" }}>
            *Medical Billing*
          </span>
        </Heading>
        <HStack padding="3rem" color="whitesmoke">
          <Stack flex="1" paddingLeft="3rem">
            <Heading>Our Mission</Heading>
            <Text style={textStyle}>
              Providing specialty-focused, innovative outsourcing services and
              solutions for transitioning healthcare to value-based care while
              efficiently managing insurance and patient financials.
            </Text>
            <Image src={ourMissing.src} borderRadius="4px" />
          </Stack>
          <Stack flex="1" paddingX="3rem">
            <Image src={ourVision.src} borderRadius="4px" />
            <Heading>Our Vision</Heading>
            <Text style={textStyle}>
              Being a trusted partner of choice by providing one-stop,
              technology-enabled, value driven healthcare solutions and services
              that enhance DME/HME, physician and medical practice growth and
              profitability.
            </Text>
          </Stack>
          <Stack flex="1" paddingRight="3rem">
            <Heading>Our Values</Heading>
            <Text style={textStyle}>
              A client-centered approach that is both innovative and creative
              and focuses on accountability, ownership, teamwork, flexibility,
              trust, respect, and integrity, while helping to grow your
              business.
            </Text>
            <Image src={ourValues.src} borderRadius="4px" />
          </Stack>
        </HStack>
      </Box>
      <Box backgroundColor="#306091">
        <Heading textAlign="center" color="whitesmoke">
          Why{" "}
          <span style={{ fontWeight: "600", textDecoration: "underline" }}>
            *Medical Billing*
          </span>
        </Heading>
        <HStack>
          <VStack></VStack>
        </HStack>
      </Box>
    </>
  );
};

export default about;
