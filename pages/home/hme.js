import {
  Container,
  Heading,
  Image,
  Text,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import img from "../../images/medicalbilling-cover.jpg";

const hme = () => {
  return (
    <Container maxW={["100%", "100%", "100%", "90%"]} py="5rem">
      <Heading textAlign="center" size={["md", "lg", "xl", "xl"]}>
        {"HME / DME Billing Services– Analysis, Management, & Reporting"}
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
      >
        <GridItem m={["0.5rem", "1rem", "0.5rem", "2rem"]}>
          <Box>
            <Image src={img.src}></Image>
          </Box>
        </GridItem>
        <GridItem m={["0.5rem", "1rem", "0.5rem", "2rem"]}>
          <Box>
            <Text
              my="1rem"
              fontSize={["0.9rem", "1.1rem", "1.1rem", "1.3rem"]}
              lineHeight="2rem"
            >
              <span style={{ fontWeight: "600" }}>
                Managing your HME/DME billing
              </span>{" "}
              can be complicated in an ever-changing regulatory environment.
              Researching denied claims can be a frustrating and time-consuming
              process that can cause burnout and attrition in your team.
            </Text>
            <Text
              my="1rem"
              fontSize={["0.9rem", "1.1rem", "1.1rem", "1.3rem"]}
              lineHeight="2rem"
            >
              <span style={{ fontWeight: "600" }}>
                Outsourcing HME/DME billing
              </span>{" "}
              can bring a lot of peace to your mind! Analytix partners with your
              HME/DME to take the pressure off your team from day one. We make
              it easy to improve collections, streamline medical billing
              processes, and reduce denied claims by providing technology
              solutions and a team of certified, experienced medical billing
              experts.
            </Text>
            <Text
              my="1rem"
              fontSize={["0.9rem", "1.1rem", "1.1rem", "1.3rem"]}
              lineHeight="2rem"
            >
              Our healthcare solutions provide peace of mind so that you can
              focus on business growth and providing the best care to patients.
              Our{" "}
              <span style={{ fontWeight: "600" }}>
                HME/DME billing solutions
              </span>{" "}
              can be customized to meet your needs and scale for growth.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default hme;
