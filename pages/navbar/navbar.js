import { Box, Container, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container p="1.5rem">
      <HStack justifyContent="space-between">
        <Box>
          <Link href="/">
            <Text cursor="pointer" _hover={{ color: "green" }}>
              HOME
            </Text>
          </Link>
        </Box>
        <Box>
          <Link href="/about">
            <Text cursor="pointer" _hover={{ color: "green" }}>
              ABOUT
            </Text>
          </Link>
        </Box>
        <Box>
          <Link href="/services">
            <Text cursor="pointer" _hover={{ color: "green" }}>
              SERVICES
            </Text>
          </Link>
        </Box>
        <Box>
          <Link href="/contact">
            <Text cursor="pointer" _hover={{ color: "green" }}>
              CONTACT
            </Text>
          </Link>
        </Box>
      </HStack>
    </Container>
  );
};
export default Navbar;
