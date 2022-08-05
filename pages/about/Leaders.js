import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
// import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ourLeaders } from "../../constants/constants";

const Leaders = () => {
  return (
    <Box bgColor="#242424" py="3rem" color="white">
      <Heading textAlign="center" size="xl" mb="2.5rem">
        Our Leadership
      </Heading>
      <Container maxW="70%">
        <Grid
          textAlign="-webkit-center"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={3}
        >
          {ourLeaders?.map((item, keys) => {
            return (
              <GridItem key={keys}>
                <Box
                  maxW="300px"
                  height={["250px", "300px", "300px", "300px"]}
                  overflow="hidden"
                  borderRadius="6px"
                  my="1rem"
                >
                  <Image src={item.image} objectFit="cover" />
                </Box>
                <Heading>{item.name}</Heading>
                <Text>{item.description}</Text>
                {/* <Link href={item.link}> */}
                <Text cursor="pointer" color="#4299e1">
                  SEE MORE
                  <ArrowForwardIcon />
                </Text>
                {/* </Link> */}
              </GridItem>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Leaders;
