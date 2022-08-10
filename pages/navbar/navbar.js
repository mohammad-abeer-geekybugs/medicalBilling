import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { navLinks } from "../../constants/constants";
import { HamburgerIcon } from "@chakra-ui/icons";
import medicalBillingLogo from "../../images/medicalBillingLogo.png";
import { useRouter } from "next/router";

const activeStyle = { color: "#e96c05" };
const inactiveStyle = { color: "white" };
const inactiveStyleMobile = {
  color: "#242424",
};

const Navbar = () => {
  const router = useRouter();
  const [activeState, setActiveState] =
    useState(""); /* For Path Styling in Navbar*/

  useEffect(() => {
    setActiveState(router.pathname);
  }, [router.pathname]);

  return (
    <Box backgroundColor={"#242424"} textAlign="end" color="white">
      <Flex>
        <Box flex="3" textAlign="-webkit-center" alignSelf="center">
          <Link href="/">
            <Image
              src={medicalBillingLogo.src}
              width={["70%", "40%", "35%", "18%"]}
              cursor="pointer"
            />
          </Link>
        </Box>
        <Box flex="5" />
        <Flex flex="3">
          <Flex
            direction="row"
            justifyContent="center"
            display={["none", "none", "flex", "flex"]}
          >
            {navLinks.map((link, index) => {
              return (
                <Box
                  key={index}
                  p={["0.3rem", "0.7rem", "1.3rem", "2rem"]}
                  style={
                    activeState === link.name || activeState === link.path
                      ? activeStyle
                      : inactiveStyle
                  }
                >
                  <Link href={link.path}>
                    <Text
                      cursor="pointer"
                      _hover={activeStyle}
                      fontSize={["12px", "14px"]}
                    >
                      {link.name}
                    </Text>
                  </Link>
                </Box>
              );
            })}
          </Flex>
          {/* Hamburger menu */}
          <Box
            className={styles.mobileContainer}
            display={["flex", "flex", "none", "none"]}
          >
            <Menu>
              <MenuButton
                border="1px solid white"
                className={styles.buttonColorOverride}
                icon={<HamburgerIcon />}
                bgColor="#242424"
                as={IconButton}
                _active={{ bgColor: "#242424" }}
                _focus={{ bgColor: "#242424" }}
                m="1rem"
              />
              <MenuList className={styles.topnav}>
                <Flex id="myLinks" direction="column">
                  {navLinks.map((link, index) => {
                    return (
                      <Box
                        key={index}
                        bgColor="transparent"
                        style={
                          activeState === link.name || activeState === link.path
                            ? activeStyle
                            : inactiveStyleMobile
                        }
                      >
                        <Link href={link.path}>
                          <MenuItem
                            cursor="pointer"
                            _hover={activeStyle}
                            _active={inactiveStyleMobile}
                            _focus={{ backgroundColor: "transparent" }}
                            fontSize={["12px", "14px"]}
                          >
                            {link.name}
                          </MenuItem>
                        </Link>
                      </Box>
                    );
                  })}
                </Flex>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
