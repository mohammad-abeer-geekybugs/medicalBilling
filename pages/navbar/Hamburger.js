import React from "react";

import { navLinks } from "../../constants/constants";
import medicalBillingLogo from "../../images/medicalBillingLogo.png";

import { Flex, Button, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const Hamburger = (changeDisplay) => {
  //   const [display, changeDisplay] = React.useState("none");
  return (
    <>
      {/* Mobile Content */}
      {/* <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      > */}
      <Flex justify="flex-end">
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => changeDisplay("none")}
        />
      </Flex>

      <Flex flexDir="column" align="center">
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
      </Flex>
      {/* </Flex> */}
    </>
  );
};

export default Hamburger;

//     <Flex display={["flex", "flex", "flex", "none"]}>
//       <Box flex="3" textAlign="-webkit-center">
//         <Link href="/">
//           <Image src={medicalBillingLogo.src} width="10%" cursor="pointer" />
//         </Link>
//       </Box>

//       <Flex direction="column" overflowY="auto">
//         <Menu>
//           <MenuButton
//             as={IconButton}
//             aria-label="Options"
//             icon={<HamburgerIcon />}
//             variant="outline"
//             backgroundColor="green"
//             onClick={""}
//           />
//           {navLinks.map((item, index) => {
//             return (
//               <MenuList
//                 key={index}
//                 backgroundColor="gray"
//                 style={
//                   activeState === item.name || activeState === item.path
//                     ? activeStyle
//                     : inactiveStyle
//                 }
//               >
//                 <Link href={item.path}>
//                   <MenuItem cursor="pointer" _hover={activeStyle}>
//                     {item.name}
//                   </MenuItem>
//                 </Link>
//               </MenuList>
//             );
//           })}
//         </Menu>
//       </Flex>
//     </Flex>

// /* --------------------------------- */
// <IconButton
//           aria-label="Open Menu"
//           size="lg"
//           mr={2}
//           icon={<HamburgerIcon />}
//           onClick={() => changeDisplay("flex")}
//           display={["flex", "flex", "none", "none"]}
//         />
