import Link from "next/link";
import {
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  ListItem,
  List,
  Divider,
  ListIcon,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import logo from "../../images/medicalBillingLogo.png";
import fbLogo from "../../images/fbLogo.png";
import twitterLogo from "../../images/twitterLogo.png";
import instagramLogo from "../../images/InstagramLogo.png";

const Footer = () => {
  return (
    <VStack backgroundColor="#242424" fontSize="1.1rem" lineHeight="2.2rem">
      <Flex
        alignItems={["center", "center", "center", "start"]}
        direction={["column", "row", "row", "row"]}
        width="100%"
        color="white"
        spacing="10"
        pt="1.5rem"
        pb="3rem"
      >
        <VStack flex="2" alignSelf="center">
          <Image src={logo.src} width="100px" mb="1rem"></Image>
          <HStack>
            <Link href="#">
              <Image width="25px" src={fbLogo.src} cursor="pointer" />
            </Link>
            <Link href="#">
              <Image width="25px" src={twitterLogo.src} cursor="pointer" />
            </Link>
            <Link href="#">
              <Image width="25px" src={instagramLogo.src} cursor="pointer" />
            </Link>
          </HStack>
        </VStack>
        <Grid
          alignSelf="center"
          color="white"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={[1, 1, 3, 6]}
          width={["", "60%", "60%", "60%"]}
          ml={["33%", "20%", "", ""]}
        >
          <GridItem maxW="70%">
            <Heading size="md" my="1rem">
              COMPANY
            </Heading>
            <List>
              <Link href="/about">
                <ListItem cursor="pointer">
                  <Flex>
                    <ListIcon as={ChevronRightIcon} mt="10px" />
                    <Text>About</Text>
                  </Flex>
                </ListItem>
              </Link>
              <Link href="/services">
                <ListItem cursor="pointer">
                  <Flex>
                    <ListIcon as={ChevronRightIcon} mt="10px" />
                    <Text>Services</Text>
                  </Flex>
                </ListItem>
              </Link>
            </List>
          </GridItem>

          <GridItem>
            <Heading size="md" my="1rem">
              INDUSTRIES
            </Heading>
            <List>
              <Link href="/home/hme">
                <ListItem cursor="pointer">
                  <Flex>
                    <ListIcon as={ChevronRightIcon} mt="10px" />
                    <Text>HME/DME Billing Services</Text>
                  </Flex>
                </ListItem>
              </Link>
              <Link href="/home/physician">
                <ListItem cursor="pointer">
                  <Flex>
                    <ListIcon as={ChevronRightIcon} mt="10px" />
                    <Text>Medical / Physician Billing Services</Text>
                  </Flex>
                </ListItem>
              </Link>
            </List>
          </GridItem>
          <GridItem>
            <Heading size="md" my="1rem">
              Quick Links
            </Heading>
            <List>
              <Link href="#">
                <ListItem cursor="pointer">
                  <ListIcon as={ChevronRightIcon} />
                  Blog
                </ListItem>
              </Link>
              <Link href="/contact">
                <ListItem cursor="pointer">
                  <ListIcon as={ChevronRightIcon} />
                  Contact Us
                </ListItem>
              </Link>
            </List>
          </GridItem>
        </Grid>
      </Flex>
      <Divider borderColor="gray" />
      <VStack>
        <HStack spacing={8}>
          <Link href="/privacy-policy">
            <Text color="orange.400" cursor="pointer">
              Terms of Use
            </Text>
          </Link>
          <Link href="/privacy-policy">
            <Text color="orange.400" cursor="pointer">
              Privacy Policy
            </Text>
          </Link>
        </HStack>
        <Text textAlign="center" color="white">
          @2022 Geekybugs, Inc. All rights reserved.
        </Text>
      </VStack>
    </VStack>
  );
};

export default Footer;
