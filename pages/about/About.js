import React from "react";
import { Box, Image, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import { dataAbout } from "../../constants/constants";

const About = () => {
  return (
    <Box paddingY="3rem" bgColor={"#242424"}>
      <Heading textAlign="center" color="whitesmoke" mb="3rem">
        About{" "}
        <span style={{ fontWeight: "600", textDecoration: "underline" }}>
          *Medical Billing*
        </span>
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        color="white"
      >
        {dataAbout.map((item) => {
          return (
            <>
              <GridItem p="2rem">
                <Heading textAlign="center" mb="1rem">
                  {item.title}
                </Heading>
                <Text textAlign="justify">{item.desc}</Text>
                <Box mt="2rem">
                  <Image
                    w="-webkit-fill-available"
                    src={item.img}
                    borderRadius="4px"
                  />
                </Box>
              </GridItem>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default About;
