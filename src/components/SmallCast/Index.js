import React from "react";
import { imageBase } from "../../Constatns/ImageBase";
import movieStar from "../../Asets/moviestar.png";
import { Text, Wrapper } from "./Styled";

export const SmallCast = ({ name, character, profile_path }) => {
  return (
    <Wrapper>
      <img
        src={profile_path === null ? movieStar : imageBase + profile_path}
        alt="company logo"
      />
      <Text>
        <h1>{name}</h1>
        <p>{character}</p>
      </Text>
    </Wrapper>
  );
};
