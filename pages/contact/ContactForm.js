import React from "react";
import { useFormik } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  useToast,
  FormHelperText,
  Textarea,
  Container,
} from "@chakra-ui/react";

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 15) {
    errors.userName = "User Name must be less that 15 characters!";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const ContactForm = () => {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      toast({
        title: "Submitted",
        description: "Your message has been sent",
        status: "success",
        duration: 9000,
        position: "top",
      });
    },
  });
  return (
    <Container
      maxW={["90%", "90%", "60%", "40%"]}
      boxShadow="0px 3px 17px 1px lightgray"
      borderRadius="6px"
      p="2rem"
      mt="4rem"
    >
      <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
        <FormControl>
          <FormLabel htmlFor="userName">Name*</FormLabel>
          <Input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <FormHelperText color="#e96c05">
              {formik.errors.userName}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email*</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <FormHelperText color="#e96c05">
              {formik.errors.email}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="message">Message*</FormLabel>
          <Textarea
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
        </FormControl>
        <Button
          bgColor="#e96c05"
          color="white"
          mt="1rem"
          type="submit"
          _hover={{ backgroundColor: "#242424", color: "White" }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
