import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import { BtnLeft, BtnRight } from "./Syled";

export const ScrollHorizon = ({ scrollHorisontal, isScrollMax }) => {
  return (
    <div>
      <BtnRight onClick={() => scrollHorisontal(700)}>
        <ArrowRightIcon w={10} h={10} color="white" />
      </BtnRight>
      {isScrollMax && (
        <BtnLeft onClick={() => scrollHorisontal(-700)}>
          <ArrowLeftIcon w={10} h={10} color="white" />
        </BtnLeft>
      )}

      <button>click</button>
    </div>
  );
};
