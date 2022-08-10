import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import _ from "lodash";
import { dummyData } from "../../constants/constants";

const ServicesWeSpecializeIn = () => {
  const [data, setData] = useState([...dummyData]);

  return (
    <Container maxW="90%" my="3rem">
      <Stack>
        <Heading textAlign="center" mb="2rem">
          Services That We Specialize In
        </Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          {data.map((item, index) => {
            return (
              <GridItem key={item.id}>
                <Box
                  borderRadius="6px"
                  bgImage={item.img}
                  bgRepeat="no-repeat"
                  bgPos="center"
                  bgSize="cover"
                  opacity="85%"
                  boxShadow="0px 3px 17px 1px gray"
                >
                  <Box
                    borderRadius="6px"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                    minH={["100px", "150px", "200px", "250px"]}
                    onMouseEnter={() => {
                      setData((prevData) => {
                        prevData[index].isHovering = true;
                        return [...prevData];
                      });
                    }}
                    onMouseLeave={() => {
                      setData((prevData) => {
                        prevData[index].isHovering = false;
                        return [...prevData];
                      });
                    }}
                  >
                    <Heading
                      textAlign="center"
                      color="white"
                      paddingTop={["13%", "21%", "30%", "35%", "30%"]}
                      size="md"
                      display={item.isHovering ? "none" : "block"}
                    >
                      {item.Heading}
                    </Heading>
                    <Text
                      p="30px"
                      color="white"
                      display={item.isHovering ? "block" : "none"}
                      paddingTop="50px"
                      textAlign="center"
                    >
                      {item.Text}
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ServicesWeSpecializeIn;
