import React from "react";

import { Search } from "../Search/Index";
import { Wrapper } from "./Styled";

export const Header = ({ favouritesOpen, setFavouritesOpen }) => {
  return (
    <Wrapper>
      <Search
        favouritesOpen={favouritesOpen}
        setFavouritesOpen={setFavouritesOpen}
      />
    </Wrapper>
  );
};
