import { Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { MoviePoster, Wrapper } from "./Styled";
import { imageBase } from "../../Constatns/ImageBase";

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
        mt="1rem
        "
      >
        {original_name || original_title}
      </Heading>
      <Text>{overview}</Text>
      <MoviePoster src={`${imageBase}${backdrop_path}`} alt="moviePoster" />
    </Wrapper>
  );
};
