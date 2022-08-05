import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Grid,
  GridItem,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { servicesWeProvide } from "../../constants/constants";

const ServicesWeProvide = () => {
  return (
    <>
      <Box bgColor="blue.700">
        <Container maxW="75%" py="4rem">
          <Heading textAlign="center" color="white" mb="2rem">
            Services We Provide
          </Heading>
          <HStack>
            <Grid
              color="white"
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={6}
            >
              {servicesWeProvide?.map((item, keys) => {
                return (
                  <GridItem key={keys}>
                    <Flex>
                      <Icon w={7} h={7} as={ChevronRightIcon} mr="0.5rem" />
                      <Box>
                        <Heading size="md">{item.title}</Heading>
                        <Text fontSize="1.2rem" mt="0.5rem">
                          {item.text}
                        </Text>
                      </Box>
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default ServicesWeProvide;
