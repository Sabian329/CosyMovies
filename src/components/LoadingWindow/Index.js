import { Heading } from "@chakra-ui/layout";
import React from "react";
import clap from "../../Asets/clap.png";
import { Wrapper } from "./Styled";

export const LoadingWindow = () => {
  return (
    <Wrapper>
      <img src={clap} alt="Loading" />
      <Heading mt="3rem">Loading</Heading>
    </Wrapper>
  );
};
