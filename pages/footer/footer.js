import Link from "next/link";
import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Image,
  ListItem,
  List,
  Divider,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import logo from "../../images/medicalBillingLogo.png";
import fbLogo from "../../images/fbLogo.png";
import twitterLogo from "../../images/twitterLogo.png";
import instagramLogo from "../../images/InstagramLogo.png";
const MainVstackStyle = {
  flex: "1",
  marginBottom: "auto",
  alignItems: "start",
};

const Footer = () => {
  return (
    <VStack backgroundColor="#242424" fontSize="1.1rem" lineHeight="2.2rem">
      <HStack width="100%" color="white" spacing="10" py="4rem">
        <VStack flex="2">
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
        <VStack style={MainVstackStyle}>
          <Heading size="md">COMPANY</Heading>
          <List>
            <Link href="/about">
              <ListItem cursor="pointer">
                <ListIcon as={ChevronRightIcon} />
                About
              </ListItem>
            </Link>
            <Link href="/services">
              <ListItem cursor="pointer">
                <ListIcon as={ChevronRightIcon} />
                Services
              </ListItem>
            </Link>
          </List>
        </VStack>
        <VStack style={MainVstackStyle}>
          <Heading size="md">INDUSTRIES</Heading>
          <List>
            <Link href="/home/hme">
              <ListItem cursor="pointer">
                <ListIcon as={ChevronRightIcon} />
                HME/DME Billing Services
              </ListItem>
            </Link>
            <Link href="/home/physician">
              <ListItem cursor="pointer">
                <ListIcon as={ChevronRightIcon} />
                Medical / Physician Billing Services
              </ListItem>
            </Link>
          </List>
        </VStack>
        <VStack style={MainVstackStyle}>
          <Heading size="md">Quick Links</Heading>
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
        </VStack>
      </HStack>
      <Divider borderColor="gray" />
      <VStack>
        <HStack spacing={8}>
          <Text color="orange.400">Terms of Use</Text>
          <Text color="orange.400">Privacy Policy</Text>
        </HStack>
        <Text color="white">@2022 Geekybugs, Inc. All rights reserved.</Text>
      </VStack>
    </VStack>
  );
};

export default Footer;
