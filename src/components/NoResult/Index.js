import React from "react";
import { ImageWrapper, Wrapper } from "./Styled";
import { Heading } from "@chakra-ui/layout";

export const NoResults = () => (
  <Wrapper>
    <Heading color="wheat" fontWeight="light">
      Ops !
    </Heading>
    <Heading color="white" fontWeight="light">
      Sorry, no results found
    </Heading>
    <ImageWrapper />
  </Wrapper>
);
