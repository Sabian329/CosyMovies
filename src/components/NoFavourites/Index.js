import React from "react";
import { Animate, Cursor, Wrapper } from "./Styled";
import clap from "../../Assets/logo11.png";
import { Heading } from "@chakra-ui/layout";
import { StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import cursor from "../../Assets/cursor.png";

export const NoFavourites = () => {
  return (
    <Wrapper>
      <Animate>
        <motion.div
          animate={{
            color: ["hsla(51, 100%, 50%, 1)", "hsl(0,100%,50%)"],
            scale: [1, 0.7, 1],
          }}
        >
          <StarIcon />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 0.7, 1],
            opacity: [1, 1, 0],
            y: -110,
          }}
          // transition={{ duration: 0.2 }}
        >
          <Cursor src={cursor} />
        </motion.div>
      </Animate>
      <img src={clap} alt="clap" />
      <Heading color="wheat" fontWeight="light" margin="1rem">
        no favourites yet
      </Heading>
    </Wrapper>
  );
};
