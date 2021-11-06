import * as React from "react";
import { useSelector } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { MoviesWrapper } from "./components/MoviesWrapper/Index";
import { Baselink } from "./Constatns/Api";
import { Search } from "./components/Search/Index";
import { selectSearch } from "./Redux/selectors";
import { SearchMovies } from "./components/SchearchMovies/Index";

function App() {
  const searchState = useSelector(selectSearch);

  return (
    <ChakraProvider>
      <Search />
      {searchState.isOpen ? (
        <SearchMovies />
      ) : (
        <>
          <MoviesWrapper option={Baselink.popular} />
          <MoviesWrapper option={Baselink.top} />
          <MoviesWrapper option={Baselink.upcomming} />
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
