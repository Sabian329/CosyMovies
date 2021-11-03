import React, { useState } from "react";
import { imageBase } from "../../Constatns/ImageBase";
import { CircularProgressWrapper, Title, Wrapper } from "./Styled";
import {
  Text,
  Box,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export const MovieItem = ({
  poster_path,
  overview,
  release_date,
  vote_average,
  original_title,
  original_name,
  backdrop_path,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Wrapper>
      <img src={`${imageBase}${poster_path}`} alt="film" />
      <CircularProgressWrapper>
        <CircularProgress
          thickness="12px"
          value={vote_average * 10}
          color="red"
        >
          <CircularProgressLabel color="white" fontSize="xs">
            {vote_average}
          </CircularProgressLabel>
        </CircularProgress>
      </CircularProgressWrapper>
      <Text color="wheat" fontSize="xs">
        {release_date}
      </Text>
      <Text fontSize="xs" margin="1rem" color="white" width="14rem">
        {overview}
      </Text>
    </Wrapper>
  );
};
