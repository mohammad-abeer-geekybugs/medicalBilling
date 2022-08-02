import {
  Heading,
  Box,
  Container,
  Flex,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
const IndustriesWeServe = () => {
  const [type, setType] = useState("HME");

  const activeStyle = { backgroundColor: "#e96c05" };

  const handleClick = (value) => {
    setType(value);
  };
  return (
    <Container maxWidth="90%" my="3rem">
      <Heading textAlign="center">
        Industries We Serve for Medical Billing Management
      </Heading>
      <Flex>
        <Stack flex="1" m="3rem">
          <Button
            backgroundColor="#242424"
            color="white"
            style={type === "HME" ? activeStyle : {}}
            onClick={() => handleClick("HME")}
            _hover={{ bgColor: "none" }}
          >
            HME/DME
          </Button>
          <Button
            color="white"
            backgroundColor="#242424"
            style={type === "Physician" ? activeStyle : {}}
            _hover={{ bgColor: "none" }}
            onClick={() => handleClick("Physician")}
          >
            Physician
          </Button>
        </Stack>
        <Box flex="2" m="3rem">
          {type === "HME" ? (
            <Box>
              <Heading mb="1.5rem" size="md">
                HME/DME
              </Heading>
              <Text mb="2rem">
                Managing medical billing in-house can be demanding for growing
                HME/DME. At Analytix, we understand that managing your HME/DME
                can become taxing with the ever changing regulatory norms, claim
                denials research and processing, and all the additional steps
                involved in revenue cycle management. Analytix Healthcare
                Solutions partners with your HME/ DME to ensure medical billing
                is{" "}
                <span style={{ fontWeight: "600" }}>
                  efficient, accurate and worry-free.
                </span>
              </Text>
              <Link href="/home/hme">
                <Button
                  color="white"
                  style={activeStyle}
                  _hover={{ bgColor: "#242424" }}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          ) : (
            <Box>
              <Heading mb="1.5rem" size="md">
                Physician Billing
              </Heading>
              <Text mb="2rem">
                Now more than ever, it has become imperative that medical
                practices optimize reimbursement collection from insurance
                companies and patients. It is not an easy task for physicians to
                deliver quality value-based care while also ensuring increased
                cash flows, completed administrative paperwork, and expertise in
                the ever-advancing field of physician billing.
              </Text>
              <Link href="/home/physician">
                <Button
                  color="white"
                  style={activeStyle}
                  // bgColor={}
                  _hover={{ bgColor: "#242424" }}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default IndustriesWeServe;
