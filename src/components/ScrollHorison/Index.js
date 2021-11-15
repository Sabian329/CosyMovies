import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import React from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { Btn, BtnLeft, BtnRight } from "./Syled";

export const ScrollHorizon = ({ scrollHorisontal, site }) => {
  const size = useWindowSize();
  return (
    <div>
      <BtnRight onClick={() => scrollHorisontal(700)}>
        <ArrowRightIcon w={10} h={10} color="white" />
      </BtnRight>
      <BtnLeft onClick={() => scrollHorisontal(-700)}>
        <ArrowLeftIcon w={10} h={10} color="white" />
      </BtnLeft>
      <button>click</button>
    </div>
  );
};
