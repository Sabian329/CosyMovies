import React from "react";
import { Button } from "@chakra-ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { CenterBtns, Wrapper } from "./Styled";

export const Pagination = ({ pageNum, setPageNum }) => {
  return (
    <Wrapper>
      <Button onClick={() => setPageNum(pageNum === 1 ? pageNum : pageNum - 1)}>
        <ChevronLeftIcon />
      </Button>

      <CenterBtns>
        <Button color="wheat">{pageNum === 1 ? 1 : pageNum}</Button>
      </CenterBtns>

      <Button onClick={() => setPageNum(pageNum + 1)}>
        <ChevronRightIcon />
      </Button>
    </Wrapper>
  );
};
