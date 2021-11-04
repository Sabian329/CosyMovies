import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MoviesWrapper } from "./components/MoviesWrapper/Index";

function App() {
  return (
    <ChakraProvider>
      <MoviesWrapper />
      <MoviesWrapper />
      <MoviesWrapper />
    </ChakraProvider>
  );
}

export default App;
