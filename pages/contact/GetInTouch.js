import React from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { contactData } from "../../constants/constants";
import { PhoneIcon } from "@chakra-ui/icons";

const GetInTouch = () => {
  return (
    <Container maxW={["100%", "50%", "50%", "70%", "60%"]} my="3rem">
      <Heading textAlign="center" pt="2rem">
        Get In Touch
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={3}
        my="2rem"
      >
        {contactData?.map((item, keys) => {
          return (
            <GridItem
              key={keys}
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
              <Box>
                <Icon w="30px" h="30px" as={PhoneIcon} my="1rem"></Icon>
                <Heading size="md" mb="1rem">
                  {item.area}
                  {", "}
                  {item.country}
                </Heading>
                <Text mb="0.5rem">{item.phone}</Text>
                <Text mb="0.5rem">{item.email}</Text>
                <Text mb="0.5rem">{item.address}</Text>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default GetInTouch;
