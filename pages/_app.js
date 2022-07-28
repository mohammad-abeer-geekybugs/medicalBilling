import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
