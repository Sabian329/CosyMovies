import React, { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/Index";
import {
  ButtonWrapper,
  MainWrapper,
  NameBtn,
  NameBtnWrapper,
  ScrollWrapper,
  Wrapper,
} from "./Styled";
import { Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Baselink, SectionNames } from "../../Constatns/Api.js";
import { Pagination } from "../Pagination/Index";
import { Colors } from "../../Theme/Colors";
import { useWindowSize } from "../../Hooks/useWindowSize";

export const MoviesWrapper = ({ option, noBtn, trending }) => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [isMovieOrTv, setIsMovieOrTv] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  const DisplayOption = () => (isMovieOrTv ? Baselink.movie : Baselink.tv);
  const ResetPageAndSetOption = () => {
    DisplayOption();
    setIsMovieOrTv(!isMovieOrTv);
    setPageNum(1);
  };
  useEffect(() => {
    size.width >= 768 ? setIsMobile(false) : setIsMobile(true);
  }, [size]);

  useEffect(() => {
    fetch(
      `${Baselink.base}${trending || ""}${DisplayOption()}/${option}${
        Baselink.key
      }page=
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
        }
      );
  }, [pageNum, DisplayOption(), option]);

  return (
    <MainWrapper>
      <NameBtnWrapper>
        <NameBtn>
          <Heading color="white" padding="1rem" fontWeight="light">
            {SectionNames[option]}
          </Heading>
          {!noBtn && (
            <Button
              w="5rem"
              bg={Colors.mainTheme1}
              fontWeight="medium"
              color={Colors.red}
              onClick={() => {
                ResetPageAndSetOption();
              }}
            >
              {DisplayOption()}
            </Button>
          )}
        </NameBtn>
        {!isMobile && (
          <ButtonWrapper>
            <Pagination setPageNum={setPageNum} pageNum={pageNum} />
          </ButtonWrapper>
        )}
      </NameBtnWrapper>
      <ScrollWrapper>
        <Wrapper>
          {apiData?.results?.map((item) => (
            <MovieItem {...item} key={item.id} DisplayOption={DisplayOption} />
          ))}
        </Wrapper>
      </ScrollWrapper>
    </MainWrapper>
  );
};
