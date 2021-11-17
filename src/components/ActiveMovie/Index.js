import { Heading, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import {
  ButtonMore,
  Buttons,
  HeaderRelease,
  ImgSec,
  MoviePoster,
  OverviewWrapper,
  Wrapper,
} from "./Styled";
import { imageBase } from "../../Constatns/ImageBase";
import clap from "../../Asets/clap.png";
import { useDispatch, useSelector } from "react-redux";
import { selectaddToFavourites } from "../../Redux/selectors";
import { addItem, deleteItem } from "../../Redux/slices/addToFavSlice";
import { motion } from "framer-motion";
import { StarIcon } from "@chakra-ui/icons";
import { ModalContent } from "../ModalContent/Index";
import { Colors } from "../../Theme/Colors";

export const ActiveMovie = ({
  original_title,
  original_name,
  overview,
  backdrop_path,
  setIsModalOpen,
  media_type,
  DisplayOption,
  release_date,
  first_air_date,
  id,
  isOpen,
  isMobile,
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
        <ImgSec>
          <button onClick={(proxy) => addAndCheck(proxy)}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <StarIcon
                w={5}
                h={5}
                color={isInFavourites ? Colors.red : "gold"}
              />
            </motion.button>
          </button>
          {backdrop_path === undefined ? (
            <MoviePoster src={clap} alt="nophpto" />
          ) : (
            <MoviePoster
              src={`${
                backdrop_path === null ? clap : imageBase + backdrop_path
              }`}
              alt="film"
            />
          )}
          <HeaderRelease>
            <Heading>{original_name || original_title}</Heading>
            <p>{`Release ${release_date || first_air_date}`}</p>
          </HeaderRelease>
        </ImgSec>

        <OverviewWrapper>
          <Text>
            {overview !== undefined
              ? overview?.substring(0, 170) + "..." || "overwiew"
              : "Sorry, there is no description."}
          </Text>
          <ModalContent
            isOpen={isOpen}
            movie_id={id}
            original_title={original_title}
            original_name={original_name}
            DisplayOption={DisplayOption}
            media_type={media_type}
            isSmall={true}
            isMobile={isMobile}
          />
          <ButtonMore>
            <button onClick={(proxy) => OpenModal(proxy)}>See full cast</button>
          </ButtonMore>
        </OverviewWrapper>
      </Wrapper>
    </>
  );
};
