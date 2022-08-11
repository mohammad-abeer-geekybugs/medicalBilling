import {
  Container,
  Heading,
  Image,
  Text,
  Flex,
  Box,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import img from "../../images/img2.jpg";

const physician = () => {
  return (
    <Container maxW="90%" py="5rem">
      <Heading textAlign="center" size={["md", "lg", "xl", "xl"]}>
        {"Medical / Physician Billing Services"}
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
              Operating a profitable medical practice is becoming increasingly
              more difficult with the excessive administrative tasks and the
              stress of managing both patients and paperwork. Stretching staff
              capabilities and managing claim denials can impact collections and
              have damaging results on the success of the medical practice.
              Smooth revenue cycle management and fast and accurate physician
              billing processes are key to growing your practice. Analytix works
              with private practice physicians and healthcare facilities to
              simplify billing processes for higher claims acceptance, faster
              reimbursements, and peace of mind to focus on patient care.
            </Text>
            <Text
              my="1rem"
              fontSize={["0.9rem", "1.1rem", "1.1rem", "1.3rem"]}
              lineHeight="2rem"
            >
              Whether you want to grow and expand your practice or scale to add
              more providers, Analytix offers efficient experience and
              stress-free
              <span style={{ fontWeight: "600" }}>
                physician billing services for practices{" "}
              </span>
              of all sizes. Our highly trained team of dedicated account
              managers and analysts offer unparalleled support. Leave the worry
              of managing daily billing technicalities to Analytix and focus on
              your patients and your practice.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default physician;
