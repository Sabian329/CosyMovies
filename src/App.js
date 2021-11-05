import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MoviesWrapper } from "./components/MoviesWrapper/Index";
import { Baselink } from "./Constatns/Api";
import { Search } from "./components/Search/Index";

function App() {
  return (
    <ChakraProvider>
      <Search />
      <MoviesWrapper option={Baselink.popular} />
      <MoviesWrapper option={Baselink.top} />
      <MoviesWrapper option={Baselink.upcomming} />
    </ChakraProvider>
  );
}

export default App;
