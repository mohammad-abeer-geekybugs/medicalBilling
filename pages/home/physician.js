import { Container, Heading, Image, Text, Flex, Box } from "@chakra-ui/react";
import React from "react";
import img from "../../images/img2.jpg";

const physician = () => {
  return (
    <Container maxW="90%">
      <Heading textAlign="center">
        {"Medical / Physician Billing Services"}
      </Heading>
      <Flex mt="3rem">
        <Box flex="1" m="2rem">
          <Image src={img.src}></Image>
        </Box>
        <Box flex="1" m="2rem">
          <Text my="1rem" fontSize="1.3rem" lineHeight="2rem">
            Operating a profitable medical practice is becoming increasingly
            more difficult with the excessive administrative tasks and the
            stress of managing both patients and paperwork. Stretching staff
            capabilities and managing claim denials can impact collections and
            have damaging results on the success of the medical practice. Smooth
            revenue cycle management and fast and accurate physician billing
            processes are key to growing your practice. Analytix works with
            private practice physicians and healthcare facilities to simplify
            billing processes for higher claims acceptance, faster
            reimbursements, and peace of mind to focus on patient care.
          </Text>
          <Text my="1rem" fontSize="1.3rem" lineHeight="2rem">
            Whether you want to grow and expand your practice or scale to add
            more providers, Analytix offers efficient experience and stress-free
            <span style={{ fontWeight: "600" }}>
              physician billing services for practices{" "}
            </span>
            of all sizes. Our highly trained team of dedicated account managers
            and analysts offer unparalleled support. Leave the worry of managing
            daily billing technicalities to Analytix and focus on your patients
            and your practice.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default physician;
