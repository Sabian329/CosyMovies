import React, { useState } from "react";
import { imageBase } from "../../Constatns/ImageBase";
import { CircularProgressWrapper, MainWrapper, Wrapper } from "./Styled";
import {
  Text,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ActiveMovie } from "../ActiveMovie/Index";
import { AnimatePresence } from "framer-motion";
import projector from "../../Asets/projector.png";

const variants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  closed: {
    opacity: 0,
    y: "100px",
    transition: { duration: 0.5 },
  },
};

export const MovieItem = ({
  poster_path,
  overview,
  release_date,
  vote_average,
  original_title,
  original_name,
  backdrop_path,
  first_air_date,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const opener = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  return (
    <MainWrapper>
      <AnimatePresence initial={false}>
        <motion.div
          onClick={() => opener()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 1.0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
            <Wrapper>
              <img
                src={`${
                  poster_path === null ? projector : imageBase + poster_path
                }`}
                alt="film"
              />
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
              <Text color="wheat" fontSize="xs" marginLeft="1rem">{`Release ${
                release_date || first_air_date
              }`}</Text>
              <Text
                fontWeight="light"
                fontSize="small"
                color="white"
                padding="1rem"
              >
                {overview?.substring(0, 100) + "..." || "opis"}
              </Text>
            </Wrapper>
          </motion.div>

          <motion.div animate={isOpen ? "closed" : "open"} variants={variants}>
            <ActiveMovie
              original_title={original_title}
              original_name={original_name}
              overview={overview}
              backdrop_path={backdrop_path}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </MainWrapper>
  );
};
