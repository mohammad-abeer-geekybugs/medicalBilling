import React from "react";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";

export const DesktopNav = () => {
  return (
    <>
      <NextLink href="/" passHref>
        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
          Home
        </Button>
      </NextLink>

      <NextLink href="/about" passHref>
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          About
        </Button>
      </NextLink>

      <NextLink href="/contact" passHref>
        <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
          Contact
        </Button>
      </NextLink>
    </>
  );
};
export default DesktopNav;
