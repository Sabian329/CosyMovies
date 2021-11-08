import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { MoviePoster, OverviewWrapper, Wrapper } from "./Styled";
import { imageBase } from "../../Constatns/ImageBase";
import clap from "../../Asets/clap.png";

export const ActiveMovie = ({
  original_title,
  original_name,
  overview,
  backdrop_path,
  known_for,
}) => {
  return (
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
  );
};
