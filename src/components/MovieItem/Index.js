import React, { useState } from "react";
import { imageBase } from "../../Constatns/ImageBase";
import { CircularProgressWrapper, Title, Wrapper } from "./Styled";
import {
  Heading,
  Box,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export const MovieItem = ({
  poster_path,
  overview,
  vote_average,
  original_title,
  original_name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Wrapper>
      <motion.button
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => {
          setIsOpen(false);
          setIsLiked(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}
      >
        <img src={`${imageBase}${poster_path}`} alt="film" />
        {isLiked ? (
          <Title>
            <Heading fontSize="xs" margin="1rem" color="black">
              {overview}
            </Heading>
          </Title>
        ) : (
          isOpen && (
            <Title>
              <Box margin="3em">
                <StarIcon
                  marginBottom="1rem"
                  w={6}
                  h={6}
                  color={!isLiked ? "white" : "gold"}
                />
                <Heading fontSize="s" color="wheat" margin="1rem">
                  {original_title || original_name}
                </Heading>
                <CircularProgressWrapper>
                  <CircularProgress color="red" value={vote_average * 10}>
                    <CircularProgressLabel color="white">
                      {vote_average}
                    </CircularProgressLabel>
                  </CircularProgress>
                </CircularProgressWrapper>
              </Box>
            </Title>
          )
        )}
      </motion.button>
    </Wrapper>
  );
};
