import {
  Container,
  Divider,
  Image,
  ListItem,
  Heading,
  List,
  ListIcon,
  Stack,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import mainBanner from "../../images/mainBanner.png";
import { IoCaretForward } from "react-icons/io5";
import {
  revenueCycleMainData,
  revenueCycleTitles,
} from "../../constants/constants";

const RevenueCycle = () => {
  return (
    <Container maxW={["90%", "80%", "80%", "80%", "60%"]}>
      <Container maxW={["90%", "80%", "80%", "80%", "80%"]}>
        <Heading size={["md", "md", "md", "lg", "xl"]} textAlign="center">
          Our revenue cycle solutions reduce friction from end to end and
          everywhere in between.
        </Heading>
        <Text textAlign="center">
          Whether choosing an{" "}
          <span
            style={{
              fontWeight: "600",
              textDecoration: "2px underline",
              textDecorationColor: "#e96c05",
            }}
          >
            end-to-end engagement
          </span>{" "}
          or a targeted solution for the front, middle or back, we help reduce
          total cost to collect, improve net patient revenue and enhance patient
          experience.
        </Text>
      </Container>
      <Box textAlign="-webkit-center">
        <Image src={mainBanner.src} />
      </Box>
      <Flex
        direction={["column", "column", "coloumn", "row", "row"]}
        alignItems={["center", "center", "center", "baseline", "baseline"]}
      >
        {revenueCycleTitles.map((title) => {
          return (
            <Stack
              width={["100%", "60%", "50%", "50%", "32.5%"]}
              p={["0.5rem", "1rem", "1rem", "1.5rem", "1.5rem"]}
              key={title}
            >
              <Heading size={["md", "md", "md", "md", "lg"]} textAlign="center">
                {title}
              </Heading>
              <Divider style={{ marginBottom: "1rem", marginTop: "1rem" }} />
              {title === "ORDER TO INTAKE"
                ? revenueCycleMainData.orderToIntake.map((item) => {
                    return (
                      <List key={item} textAlign="start">
                        <ListItem>
                          <ListIcon as={IoCaretForward} />
                          {item}
                        </ListItem>
                      </List>
                    );
                  })
                : title === "CARE TO CLAIM"
                ? revenueCycleMainData.careToClaim.map((item) => {
                    return (
                      <List key={item} textAlign="start">
                        <ListItem>
                          <ListIcon as={IoCaretForward} />
                          {item}
                        </ListItem>
                      </List>
                    );
                  })
                : title === "CLAIM TO PAYMENT"
                ? revenueCycleMainData.claimToPayment.map((item) => {
                    return (
                      <List key={item} textAlign="start">
                        <ListItem>
                          <ListIcon as={IoCaretForward} />
                          {item}
                        </ListItem>
                      </List>
                    );
                  })
                : null}
            </Stack>
          );
        })}
      </Flex>
    </Container>
  );
};
export default RevenueCycle;
