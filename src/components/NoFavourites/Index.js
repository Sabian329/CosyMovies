import React from "react";
import { Dot, Wrapper } from "./Styled";
import clap from "../../Asets/cameraIcon.png";
import { Heading } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const NoFavourites = () => {
  return (
    <Wrapper>
      <Heading color="wheat" fontWeight="light" margin="1rem">
        no favourites yet
      </Heading>
      <img src={clap} alt="clap" />
    </Wrapper>
  );
};
