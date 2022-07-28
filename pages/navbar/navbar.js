import React, { useEffect, useState } from "react";
import { Box, Container, HStack, Text, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import medicalBillingLogo from "../../images/medicalBillingLogo.png";
import { navLinks } from "../../constants/constants";

const activeStyle = { color: "#d33f3f" };
const inactiveStyle = { color: "white" };
let currentPath;

const Navbar = () => {
  const [activeState, setActiveState] = useState("");

  const handleNavClick = (value) => {
    setActiveState(value);
  };

  useEffect(() => {
    currentPath = window.location.pathname;
    setActiveState(currentPath);
  }, []);

  return (
    <Box backgroundColor={"#242424"} textAlign="end">
      <HStack justifyContent="space-between">
        <Box flex="3" textAlign="-webkit-center">
          <Image src={medicalBillingLogo.src} width="10%" />
        </Box>
        <Flex flex="4" justifyContent="center">
          {navLinks.map((link, index) => {
            return (
              <Box
                key={index}
                p="2rem"
                style={
                  activeState === link.name || activeState === link.path
                    ? activeStyle
                    : inactiveStyle
                }
              >
                <Link href={link.path}>
                  <Text
                    cursor="pointer"
                    onClick={() => handleNavClick(link.name)}
                  >
                    {link.name}
                  </Text>
                </Link>
              </Box>
            );
          })}
        </Flex>
      </HStack>
    </Box>
  );
};
export default Navbar;
