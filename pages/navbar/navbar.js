import React, { useEffect, useState } from "react";
import { Box, HStack, Text, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import medicalBillingLogo from "../../images/medicalBillingLogo.png";
import { navLinks } from "../../constants/constants";
import { useRouter } from "next/router";

const activeStyle = { color: "#e96c05" };
const inactiveStyle = { color: "white" };

const Navbar = () => {
  const router = useRouter();
  const [activeState, setActiveState] = useState("");

  useEffect(() => {
    setActiveState(router.pathname);
  }, [router.pathname]);

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
                  <Text cursor="pointer" _hover={activeStyle}>
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
