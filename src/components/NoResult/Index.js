import React from "react";
import { ImageWrapper, Wrapper } from "./Styled";
import projector from "../../Asets/projector3.png";
import { Heading } from "@chakra-ui/layout";

export const NoResults = () => (
  <Wrapper>
    <Heading color="wheat" fontWeight="light">
      Ops !
    </Heading>
    <Heading color="white" fontWeight="light">
      Sorry, no results found
    </Heading>
    <ImageWrapper>
      <div></div>
    </ImageWrapper>
  </Wrapper>
);
