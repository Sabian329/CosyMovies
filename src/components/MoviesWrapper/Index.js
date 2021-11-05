import React, { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/Index";
import { ButtonWrapper, MainWrapper, ScrollWrapper, Wrapper } from "./Styled";
import { Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Baselink } from "../../Constatns/Api.js";
import { Pagination } from "../Pagination/Index";
import { Colors } from "../../Theme/Colors";

export const MoviesWrapper = ({ option }) => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [isMovieOrTv, setIsMovieOrTv] = useState(true);

  const DisplayOption = () => (isMovieOrTv ? Baselink.movie : Baselink.tv);
  const ResetPageAndSetOption = () => {
    DisplayOption();
    setIsMovieOrTv(!isMovieOrTv);
    setPageNum(1);
  };

  useEffect(() => {
    fetch(
      `${Baselink.base}${DisplayOption()}/${option}${Baselink.key}page=
      ${pageNum}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setApiData({ ...result });
          console.log(apiData);
        },
        (error) => {
          setErrors(error);
          console.log(errors);
        }
      );
  }, [pageNum, DisplayOption(), option]);

  return (
    <MainWrapper>
      <Heading color="white" padding="1rem" fontWeight="light">
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </Heading>
      <ButtonWrapper>
        <Button
          bg={Colors.mainTheme1}
          fontWeight="medium"
          color="white"
          onClick={() => {
            ResetPageAndSetOption();
          }}
        >
          {DisplayOption()}
        </Button>
        <Pagination setPageNum={setPageNum} pageNum={pageNum} />
      </ButtonWrapper>
      <ScrollWrapper>
        <Wrapper>
          {apiData?.results?.map((item) => (
            <MovieItem {...item} key={item.id} />
          ))}
        </Wrapper>
      </ScrollWrapper>
    </MainWrapper>
  );
};
