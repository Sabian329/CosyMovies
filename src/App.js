import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { MoviesWrapper } from "./components/MoviesWrapper/Index";
import { Baselink } from "./Constatns/Api";
function App() {
  return (
    <ChakraProvider>
      <Heading w="100vw" bg="black" paddingBottom="1rem" color="white">
        Most Popular
      </Heading>
      <MoviesWrapper Baselink={Baselink.one} />
      <Heading w="100vw" bg="black" paddingBottom="1rem" color="white">
        Top Related Ever
      </Heading>
      <MoviesWrapper Baselink={Baselink.two} />
      <Heading w="100vw" bg="black" paddingBottom="1rem" color="white">
        Upcomming
      </Heading>
      <MoviesWrapper Baselink={Baselink.three} />
      <Heading w="100vw" bg="black" paddingBottom="1rem" color="white">
        Trending
      </Heading>
      <MoviesWrapper Baselink={Baselink.four} />
    </ChakraProvider>
  );
}

export default App;
