import { Container, Heading, Image, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";
import img from "../../images/medicalbilling-cover.jpg";

const hme = () => {
  return (
    <Container maxW="90%" py="5rem">
      <Heading textAlign="center">
        {"HME / DME Billing Services– Analysis, Management, & Reporting"}
      </Heading>
      <Flex mt="3rem">
        <Box flex="1" m="2rem">
          <Image src={img.src}></Image>
        </Box>
        <Box flex="1" m="2rem">
          <Text my="1rem" fontSize="1.3rem" lineHeight="2rem">
            <span style={{ fontWeight: "600" }}>
              Managing your HME/DME billing
            </span>{" "}
            can be complicated in an ever-changing regulatory environment.
            Researching denied claims can be a frustrating and time-consuming
            process that can cause burnout and attrition in your team.
          </Text>
          <Text my="1rem" fontSize="1.3rem" lineHeight="2rem">
            <span style={{ fontWeight: "600" }}>
              Outsourcing HME/DME billing
            </span>{" "}
            can bring a lot of peace to your mind! Analytix partners with your
            HME/DME to take the pressure off your team from day one. We make it
            easy to improve collections, streamline medical billing processes,
            and reduce denied claims by providing technology solutions and a
            team of certified, experienced medical billing experts.
          </Text>
          <Text my="1rem" fontSize="1.3rem" lineHeight="2rem">
            Our healthcare solutions provide peace of mind so that you can focus
            on business growth and providing the best care to patients. Our{" "}
            <span style={{ fontWeight: "600" }}>HME/DME billing solutions</span>{" "}
            can be customized to meet your needs and scale for growth.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default hme;
