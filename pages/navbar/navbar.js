import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { navLinks } from "../../constants/constants";
import medicalBillingLogo from "../../images/medicalBillingLogo.png";
import { useRouter } from "next/router";
import Hamburger from "./Hamburger";
import DesktopNav from "./DesktopNav";

const activeStyle = { color: "#e96c05" };
const inactiveStyle = { color: "white" };

const Navbar = () => {
  const router = useRouter();
  const [activeState, setActiveState] = useState("");

  useEffect(() => {
    setActiveState(router.pathname);
  }, [router.pathname]);

  const [display, changeDisplay] = React.useState("none");
  return (
    <Box backgroundColor={"#242424"} textAlign="end" color="white">
      <Flex>
        <Flex top="1rem" right="1rem" align="center">
          <Flex display={["none", "none", "flex", "flex"]}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        // zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Hamburger changeDisplay={changeDisplay} />
      </Flex>

      {/* <Flex
        justifyContent="space-between"
        display={["none", "none", "none", "flex"]}
        // pos="fixed"
        top={"1rem"}
      >
        <Box flex="3" textAlign="-webkit-center">
          <Link href="/">
            <Image src={medicalBillingLogo.src} width="10%" cursor="pointer" />
          </Link>
        </Box>
        <Flex
          direction="row"
          flex="4"
          justifyContent="center"
          display={["none", "none", "none", "flex"]}
        >
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
      </Flex>
      <Hamburger
        activeState={activeState}
        activeStyle={activeStyle}
        inactiveStyle={inactiveStyle}
      /> */}
    </Box>
  );
};
export default Navbar;
