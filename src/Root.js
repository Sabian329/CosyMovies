import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { MoviesWrapper } from "./components/MoviesWrapper/Index";
import { Baselink } from "./Constatns/Api";
import { selectSearch } from "./Redux/selectors";
import { SearchMovies } from "./components/SchearchMovies/Index";
import { Header } from "./components/Header/Index";
import { Favourites } from "./components/FavouritesWrapper/Index";
import overrides from "./Theme/theme";
import { Footer } from "./components/Footer/Index";

function App() {
  const [favouritesOpen, setFavouritesOpen] = useState(false);
  const searchState = useSelector(selectSearch);
  const noBtn = true;

  return (
    <ChakraProvider theme={overrides}>
      <Header
        favouritesOpen={favouritesOpen}
        setFavouritesOpen={setFavouritesOpen}
      />
      {favouritesOpen ? (
        <Favourites />
      ) : searchState.isOpen ? (
        <SearchMovies />
      ) : (
        <>
          <MoviesWrapper option={Baselink.popular} />
          <MoviesWrapper option={Baselink.top} />
          <MoviesWrapper trending={Baselink.trending} option={Baselink.week} />
          <MoviesWrapper option={Baselink.upcomming} noBtn={noBtn} />
        </>
      )}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
