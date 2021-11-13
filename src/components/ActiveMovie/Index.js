import { Heading, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Buttons, MoviePoster, OverviewWrapper, Wrapper } from "./Styled";
import { imageBase } from "../../Constatns/ImageBase";
import clap from "../../Asets/clap.png";
import { useDispatch, useSelector } from "react-redux";
import { selectaddToFavourites } from "../../Redux/selectors";
import { addItem, deleteItem } from "../../Redux/slices/addToFavSlice";
import { motion } from "framer-motion";
import { StarIcon } from "@chakra-ui/icons";
import { Modal } from "../Modal/Index";
export const ActiveMovie = ({
  original_title,
  original_name,
  overview,
  backdrop_path,
  setIsModalOpen,
  media_type,
  DisplayOption,
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
    favouritesState.favList.filter((item) => item.id === id).length
      ? setIsInFavourites(true)
      : setIsInFavourites(false);
  }, [favouritesState]);

  const addAndCheck = (proxy) => {
    proxy.stopPropagation();
    !favouritesState.favList.filter((item) => item.id === id).length
      ? dispatch(addItem({ media_type: media_type || DisplayOption(), id: id }))
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
            <button onClick={(proxy) => OpenModal(proxy)}>cast</button>
            <button onClick={(proxy) => addAndCheck(proxy)}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <StarIcon color={isInFavourites ? "red" : "wheat"} />
              </motion.button>
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
