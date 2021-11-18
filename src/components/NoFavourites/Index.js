import React from "react";
import { Animate, Cursor, Wrapper } from "./Styled";
import clap from "../../Assets/logo11.png";
import { Heading, Text } from "@chakra-ui/layout";
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
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <StarIcon />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1, 0.8, 1],
            opacity: [1, 1, 1, 0],
            y: [0, -110, -110, -110],
          }}
          transition={{ duration: 1.5 }}
        >
          <Cursor src={cursor} />
        </motion.div>
      </Animate>
      <img src={clap} alt="clap" />
      <Heading color="white" fontWeight="light" margin="1rem">
        no favourites yet
      </Heading>
      <Text>
        to add movie to favourites click on the movie and tap the star
      </Text>
    </Wrapper>
  );
};
