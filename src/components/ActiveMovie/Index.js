import { Heading, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Buttons, MoviePoster, OverviewWrapper, Wrapper } from "./Styled";
import { imageBase } from "../../Constatns/ImageBase";
import clap from "../../Asets/clap.png";
import { useDispatch, useSelector } from "react-redux";
import { selectaddToFavourites } from "../../Redux/selectors";
import { addItem, deleteItem } from "../../Redux/slices/addToFavSlice";
import { StarIcon } from "@chakra-ui/icons";
export const ActiveMovie = ({
  original_title,
  original_name,
  overview,
  backdrop_path,
  setIsModalOpen,
  id,
}) => {
  const dispatch = useDispatch();
  const favouritesState = useSelector(selectaddToFavourites);
  const [isInFavourites, setIsInFavourites] = useState(false);

  const OpenModal = (proxy) => {
    proxy.stopPropagation();
    setIsModalOpen(true);
  };

  useEffect(() => {
    favouritesState.favList.includes(id)
      ? setIsInFavourites(true)
      : setIsInFavourites(false);
  }, [favouritesState]);

  const addAndCheck = () => {
    !favouritesState.favList.includes(id)
      ? dispatch(addItem(id))
      : dispatch(deleteItem(id));
  };

  return (
    <>
      <Wrapper>
        <Heading
          fontWeight="medium"
          textAlign="center"
          fontSize="xl"
          color="wheat"
          margin="1rem"
        >
          {original_name || original_title}
        </Heading>
        <OverviewWrapper>
          <Text>{overview || "Sorry, there is no description."}</Text>
          <Buttons>
            <button onClick={(proxy) => OpenModal(proxy)}>creids</button>
            <button onClick={() => addAndCheck()}>
              <StarIcon color={isInFavourites ? "red" : "wheat"} />
            </button>
          </Buttons>
        </OverviewWrapper>

        {backdrop_path === undefined ? (
          <MoviePoster src={clap} alt="nophpto" />
        ) : (
          <MoviePoster
            src={`${backdrop_path === null ? clap : imageBase + backdrop_path}`}
            alt="film"
          />
        )}
      </Wrapper>
    </>
  );
};
