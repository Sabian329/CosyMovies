import React from "react";
import { FavouritesItem } from "../FavouritesItem/Index";
import { useSelector } from "react-redux";
import { selectaddToFavourites } from "../../Redux/selectors";
import { Wrapper } from "./Styled";
import { NoFavourites } from "../NoFavourites/Index";

export const Favourites = () => {
  const favouritesState = useSelector(selectaddToFavourites);

  return (
    <Wrapper>
      {favouritesState.favList.length ? (
        favouritesState.favList.map((item, index, arr) => (
          <FavouritesItem
            media_type={item.media_type}
            id={item.id}
            arr={arr}
            index={index}
          />
        ))
      ) : (
        <NoFavourites />
      )}
      {}
    </Wrapper>
  );
};
