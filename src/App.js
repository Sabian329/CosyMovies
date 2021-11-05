import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MoviesWrapper } from "./components/MoviesWrapper/Index";
import { Baselink } from "./Constatns/Api";

function App() {
  return (
    <ChakraProvider>
      <MoviesWrapper option={Baselink.popular} />
      <MoviesWrapper option={Baselink.top} />
      <MoviesWrapper option={Baselink.upcomming} />
    </ChakraProvider>
  );
}

export default App;
