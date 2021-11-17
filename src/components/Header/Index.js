import React from "react";

import { Search } from "../Search/Index";
import { Wrapper } from "./Styled";
import Logo from "../../Asets/logo11.png";
export const Header = ({ favouritesOpen, setFavouritesOpen }) => {
  return (
    <Wrapper>
      <Search
        favouritesOpen={favouritesOpen}
        setFavouritesOpen={setFavouritesOpen}
      />
      <img src={Logo} alt="CosyMovies Logo" />
    </Wrapper>
  );
};
