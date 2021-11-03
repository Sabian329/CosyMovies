import React, { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/Index";
import { MainWrapper, ScrollWrapper, Wrapper } from "./Styled";
import { Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Baselink } from "../../Constatns/Api.js";
import { increment, popularMovie, popularTv } from "../../actions";
import { decrement } from "../../actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const MoviesWrapper = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const counter = useSelector((state) => state.counter);
  const variant = useSelector((state) => state.variant);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${Baselink.base}${variant}${Baselink.key}${Baselink.page}${counter}`)
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
  }, [counter, variant]);

  return (
    <MainWrapper>
      <Heading color="white" padding="1rem">
        Most Popular
      </Heading>
      <Button onClick={() => dispatch(increment())}>{`+`}</Button>
      <Button onClick={() => dispatch(decrement())}>{`-`}</Button>
      <Button onClick={() => dispatch(popularMovie())}>movie</Button>
      <Button onClick={() => dispatch(popularTv())}>tv</Button>
      <Heading>{counter}</Heading>
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
