import React from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Heading,
  VStack,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import ourMissing from "../../images/our-mission.jpg";
import ourValues from "../../images/our-values.jpg";
import ourVision from "../../images/our-vision.jpg";
import user1 from "../../images/aboutUser1.jpg";
import user2 from "../../images/aboutUser2.jpg";
import user3 from "../../images/aboutUser3.jpg";

const textStyle = {
  textAlign: "justify",
  fontSize: "1.2rem",
  lineHeight: "2rem",
  color: "whitesmoke",
};
const about = () => {
  return (
    <>
      <Box paddingY="5rem" bgColor={"#242424"}>
        <Heading textAlign="center" color="whitesmoke">
          About{" "}
          <span style={{ fontWeight: "600", textDecoration: "underline" }}>
            *Medical Billing*
          </span>
        </Heading>
        <HStack padding="3rem" color="whitesmoke">
          <VStack flex="1" paddingLeft="3rem">
            <Heading>Our Mission</Heading>
            <Text style={textStyle}>
              Providing specialty-focused, innovative outsourcing services and
              solutions for transitioning healthcare to value-based care while
              efficiently managing insurance and patient financials.
            </Text>
            <Image src={ourMissing.src} borderRadius="4px" />
          </VStack>
          <VStack flex="1" paddingX="3rem">
            <Image src={ourVision.src} borderRadius="4px" />
            <Heading>Our Vision</Heading>
            <Text style={textStyle}>
              Being a trusted partner of choice by providing one-stop,
              technology-enabled, value driven healthcare solutions and services
              that enhance DME/HME, physician and medical practice growth and
              profitability.
            </Text>
          </VStack>
          <VStack flex="1" paddingRight="3rem">
            <Heading>Our Values</Heading>
            <Text style={textStyle}>
              A client-centered approach that is both innovative and creative
              and focuses on accountability, ownership, teamwork, flexibility,
              trust, respect, and integrity, while helping to grow your
              business.
            </Text>
            <Image src={ourValues.src} borderRadius="4px" />
          </VStack>
        </HStack>
      </Box>
      <Box backgroundColor="#306091" py="3rem">
        <Heading textAlign="center" color="whitesmoke" mb="2.5rem">
          Why{" "}
          <span style={{ fontWeight: "600", textDecoration: "underline" }}>
            *Medical Billing*
          </span>
        </Heading>
        <HStack>
          <Box flex="1" />
          <VStack color="white" lineHeight="3rem" fontSize="1.2rem" flex="2">
            <List>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Collaborative Methodology
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Streamlined Operations
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Availability and Expediency
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Dedicated Resources
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Technology-Enabled Solutions
              </ListItem>
            </List>
          </VStack>
          <VStack color="white" lineHeight="3rem" fontSize="1.2rem" flex="2">
            <List>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Confidentiality
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Compliance
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Specialty-Focus
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Multiple Solutions
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Flexibility
              </ListItem>
            </List>
          </VStack>
          <VStack color="white" lineHeight="3rem" fontSize="1.2rem" flex="2">
            <List>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Expert Workforce
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Insights
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Enhanced Customer Support
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Value-Added Services
              </ListItem>
              <ListItem>
                <ListIcon as={ChevronRightIcon} />
                Cost Efficiency
              </ListItem>
            </List>
          </VStack>
          <Box flex="1" />
        </HStack>
      </Box>
      <Box bgColor="#242424" py="3rem" color="white">
        <Heading textAlign="center" size="xl" mb="2.5rem">
          Our Leadership
        </Heading>
        <HStack mx="5rem">
          <Box flex="1"></Box>
          <VStack flex="3">
            <Box
              maxW="300px"
              height="400px"
              overflow="hidden"
              borderRadius="6px"
            >
              <Image src={user1.src} size="cover" />
            </Box>
            <Heading>User 1</Heading>
            <Text>User Info</Text>
            <Text cursor="pointer" color="#4299e1">
              SEE MORE
              <ArrowForwardIcon />
            </Text>
          </VStack>
          <VStack flex="3">
            <Box
              maxW="300px"
              height="400px"
              overflow="hidden"
              borderRadius="6px"
            >
              <Image src={user2.src} size="cover" />
            </Box>
            <Heading>User 2</Heading>
            <Text>User Info</Text>
            <Text cursor="pointer" color="#4299e1">
              SEE MORE
              <ArrowForwardIcon />
            </Text>
          </VStack>
          <VStack flex="3">
            <Box
              maxW="300px"
              height="400px"
              overflow="hidden"
              borderRadius="6px"
            >
              <Image src={user3.src} size="cover" />
            </Box>
            <Heading>User 3</Heading>
            <Text>User Info</Text>
            <Text cursor="pointer" color="#4299e1">
              SEE MORE
              <ArrowForwardIcon />
            </Text>
          </VStack>
          <Box flex="1"></Box>
        </HStack>
      </Box>
      <Divider borderColor="gray" />
    </>
  );
};

export default about;
