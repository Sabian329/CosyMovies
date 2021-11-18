import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearch } from "../../Redux/selectors";
import { Search } from "../Search/Index";
import { Wrapper } from "./Styled";
import Logo from "../../Assets/logo11.png";
import { closeSearch } from "../../Redux/slices/searchSlice";
export const Header = ({ favouritesOpen, setFavouritesOpen }) => {
  const searchState = useSelector(selectSearch);
  const dispatch = useDispatch();

  const backToMainSite = () => {
    dispatch(closeSearch());
    setFavouritesOpen(false);
  };

  return (
    <Wrapper>
      <Search
        favouritesOpen={favouritesOpen}
        setFavouritesOpen={setFavouritesOpen}
      />
      <img onClick={() => backToMainSite()} src={Logo} alt="CosyMovies Logo" />
    </Wrapper>
  );
};
