import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MoviesWrapper } from "./components/MoviesWrapper/Index";

function App() {
  return (
    <ChakraProvider>
      <MoviesWrapper />
    </ChakraProvider>
  );
}

export default App;
