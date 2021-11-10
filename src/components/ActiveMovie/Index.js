import { Heading, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MoviePoster, OverviewWrapper, Wrapper } from "./Styled";
import { imageBase } from "../../Constatns/ImageBase";
import clap from "../../Asets/clap.png";
import { Button } from "@chakra-ui/react";
import { Modal } from "../Modal/Index";
export const ActiveMovie = ({
  original_title,
  original_name,
  overview,
  backdrop_path,
  known_for,
  isModalOpen,
  setIsModalOpen,
}) => {
  const OpenModal = (proxy) => {
    proxy.stopPropagation();
    setIsModalOpen(true);
  };
  return (
    <>
      <Wrapper>
        <Heading
          fontWeight="medium"
          textAlign="center"
          fontSize="xl"
          color="wheat"
          margin="1rem
        "
        >
          {original_name || original_title || known_for[0].original_title}
        </Heading>
        <OverviewWrapper>
          <Text>{overview || "Sorry, there is no description."}</Text>
          <Button onClick={(proxy) => OpenModal(proxy)}>more</Button>
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
