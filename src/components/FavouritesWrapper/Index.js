import React from "react";
import { FavouritesItem } from "../FavouritesItem/Index";
import { useDispatch, useSelector } from "react-redux";
import { selectaddToFavourites } from "../../Redux/selectors";
import { Wrapper } from "./Styled";
import { NoFavourites } from "../NoFavourites/Index";
import { Buttons } from "../ActiveMovie/Styled";
import { Heading } from "@chakra-ui/layout";

export const Favourites = () => {
  const favouritesState = useSelector(selectaddToFavourites);

  return (
    <Wrapper>
      {favouritesState.favList.length ? (
        favouritesState.favList.map((item, index, arr) => (
          <FavouritesItem id={item} arr={arr} index={index} />
        ))
      ) : (
        <NoFavourites />
      )}
      {}
    </Wrapper>
  );
};
