import React, { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/Index";
import { ButtonWrapper, MainWrapper, ScrollWrapper, Wrapper } from "./Styled";
import { Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Baselink } from "../../Constatns/Api.js";
import { popularMovie, popularTv } from "../../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export const MoviesWrapper = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const variant = useSelector((state) => state.variant);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${Baselink.base}${Baselink.popular}${Baselink.key}${Baselink.page}${pageNum}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setApiData({ ...result });
          console.log(isLoaded);
        },
        (error) => {
          setIsLoaded(true);
          setErrors(error);
        }
      );
  }, [pageNum, variant]);

  return (
    <MainWrapper>
      <Heading color="white" padding="1rem" fontWeight="light">
        {variant.split("/")[1].charAt(0).toUpperCase() +
          variant.split("/")[1].slice(1)}
      </Heading>
      <ButtonWrapper>
        <Button
          onClick={() => setPageNum(pageNum === 1 ? pageNum : pageNum - 1)}
        >
          <ArrowLeftIcon />
        </Button>
        <Heading color="white" fontWeight="light">
          {pageNum}
        </Heading>
        <Button onClick={() => setPageNum(pageNum + 1)}>
          <ArrowRightIcon />
        </Button>
        <Button fontWeight="light" onClick={() => dispatch(popularMovie())}>
          {variant}
        </Button>
        <Button fontWeight="light" onClick={() => dispatch(popularTv())}>
          tv
        </Button>
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
