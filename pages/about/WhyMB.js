import React from "react";
import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Icon,
  Flex,
  Container,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { whyMedicalBilling } from "../../constants/constants";

const WhyMB = () => {
  return (
    <Box backgroundColor="#306091" py="3rem">
      <Heading textAlign="center" color="whitesmoke" mb="2.5rem">
        Why{" "}
        <span style={{ fontWeight: "600", textDecoration: "underline" }}>
          *Medical Billing*
        </span>
      </Heading>
      <Container maxW="65%" fontSize="20px">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
          color="white"
        >
          {whyMedicalBilling?.map((item, keys) => {
            return (
              <GridItem key={keys}>
                <Flex align="center">
                  <Icon as={ChevronRightIcon}></Icon>
                  <Text>{item}</Text>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyMB;
