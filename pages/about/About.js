import React from "react";
import { Box, Image, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import ourMissing from "../../images/our-mission.jpg";
import ourValues from "../../images/our-values.jpg";
import ourVision from "../../images/our-vision.jpg";

const textStyle = {
  fontSize: "1.2rem",
  lineHeight: "2rem",
  color: "whitesmoke",
};

const About = () => {
  return (
    <Box paddingY="5rem" bgColor={"#242424"}>
      <Heading textAlign="center" color="whitesmoke">
        About{" "}
        <span style={{ fontWeight: "600", textDecoration: "underline" }}>
          *Medical Billing*
        </span>
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        color="white"
      >
        <GridItem p="2rem">
          <Heading>Our Mission</Heading>
          <Text style={textStyle}>
            Providing specialty-focused, innovative outsourcing services and
            solutions for transitioning healthcare to value-based care while
            efficiently managing insurance and patient financials.
          </Text>
          <Box textAlign="-webkit-center">
            <Image
              w="-webkit-fill-available"
              src={ourMissing.src}
              borderRadius="4px"
            />
          </Box>
        </GridItem>

        <GridItem p="2rem">
          <Box textAlign="-webkit-center">
            <Image
              w="-webkit-fill-available"
              src={ourVision.src}
              borderRadius="4px"
            />
          </Box>
          <Heading>Our Vision</Heading>
          <Text style={textStyle}>
            Being a trusted partner of choice by providing one-stop,
            technology-enabled, value driven healthcare solutions and services
            that enhance DME/HME, physician and medical practice growth and
            profitability.
          </Text>
        </GridItem>

        <GridItem p="2rem">
          <Heading>Our Values</Heading>
          <Text style={textStyle}>
            A client-centered approach that is both innovative and creative and
            focuses on accountability, ownership, teamwork, flexibility, trust,
            respect, and integrity, while helping to grow your business.
          </Text>
          <Box textAlign="-webkit-center">
            <Image
              w="-webkit-fill-available"
              src={ourValues.src}
              borderRadius="4px"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
