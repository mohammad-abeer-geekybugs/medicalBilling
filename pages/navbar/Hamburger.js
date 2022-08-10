import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { HamburgerIcon } from "@chakra-ui/icons";
const Hamburger = () => {
  const [display, changeDisplay] = React.useState("none");

  const myFunction = () => {
    if (display === "flex") changeDisplay("none");
    else {
      changeDisplay("flex");
    }
  };
  console.log(display);
  return (
    <>
      <Box
        className={styles.mobileContainer}
        display={["flex", "flex", "none", "none"]}
      >
        {/* <!-- Top Navigation Menu --> */}
        <Menu>
          <MenuButton
            className={styles.buttonColorOverride}
            icon={<HamburgerIcon />}
            color="#242424"
            as={IconButton}
            onClick={() => myFunction()}
          />
          <MenuList className={styles.topnav}>
            {display === "flex" && (
              <Flex id="myLinks" direction="column">
                <Link href="/">
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link href="/about">
                  <MenuItem>About</MenuItem>
                </Link>
                <Link href="/services">
                  <MenuItem>Services</MenuItem>
                </Link>
                <Link href="/contact">
                  <MenuItem>Contact</MenuItem>
                </Link>
              </Flex>
            )}
          </MenuList>
        </Menu>

        {/* <Box style={{ paddingLeft: "16px" }}>
          <h3>Vertical Mobile Navbar</h3>
          <p>
            This example demonstrates how a navigation menu on a mobile/smart
            phone could look like.
          </p>
          <p>
            Click on the hamburger menu (three bars) in the top right corner, to
            toggle the menu.
          </p>
        </Box> */}

        {/* <!-- End smartphone / tablet look --> */}
      </Box>
    </>
  );
};
export default Hamburger;
