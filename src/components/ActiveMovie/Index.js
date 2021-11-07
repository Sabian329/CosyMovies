import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { MoviePoster, OverviewWrapper, Wrapper } from "./Styled";
import { imageBase } from "../../Constatns/ImageBase";
import moviePicture from "../../Asets/moviePoster.jpg";

export const ActiveMovie = ({
  original_title,
  original_name,
  overview,
  backdrop_path,
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
        {original_name || original_title}
      </Heading>
      <OverviewWrapper>
        <Text>{overview || "Sorry, there is no description."}</Text>
      </OverviewWrapper>
      <MoviePoster
        src={`${
          backdrop_path === null ? moviePicture : imageBase + backdrop_path
        }`}
        alt="moviePoster"
      />
    </Wrapper>
  );
};
