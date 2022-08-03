import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Container,
  Center,
  Stack,
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
        <Center>
          <Wrap spacing={["15px", "15px", "15px", "30px"]}>
            {data.map((item, index) => {
              return (
                <WrapItem key={item.id}>
                  <Box
                    borderRadius="8px"
                    bgImage={item.img}
                    bgRepeat="no-repeat"
                    bgPos="center"
                    bgSize="cover"
                    opacity="55%"
                  >
                    <Box
                      borderRadius="8px"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                      minH={["100px", "150px", "200px", "250px"]}
                      minW={["250px", "280px", "300px", "330px"]}
                      maxW="330px"
                      onMouseEnter={() => {
                        const newData = _.cloneDeep(data);
                        newData[index].isHovering = true;
                        setData(newData);
                      }}
                      onMouseLeave={() => {
                        const newData = _.cloneDeep(data);
                        newData[index].isHovering = false;
                        setData(newData);
                      }}
                    >
                      <Heading
                        textAlign="center"
                        color="white"
                        paddingTop="125px"
                        size="md"
                        display={item.isHovering ? "none" : "block"}
                      >
                        {item.Heading}
                      </Heading>
                      <Text
                        color="white"
                        display={item.isHovering ? "block" : "none"}
                        paddingTop="50px"
                        textAlign="center"
                      >
                        {item.Text}
                      </Text>
                    </Box>
                  </Box>
                </WrapItem>
              );
            })}
          </Wrap>
        </Center>
      </Stack>
    </Container>
  );
};

export default ServicesWeSpecializeIn;
