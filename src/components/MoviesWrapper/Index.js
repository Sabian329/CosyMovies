import React, { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/Index";
import {
  MainWrapper,
  NameBtn,
  NameBtnWrapper,
  ScrollWrapper,
  Wrapper,
} from "./Styled";
import { Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Baselink, SectionNames } from "../../Constatns/Api.js";
import { Colors } from "../../Theme/Colors";
import { useWindowSize } from "../../Hooks/useWindowSize";
import { ScrollHorizon } from "../ScrollHorison/Index";
import { useRef } from "react";

export const MoviesWrapper = ({ option, noBtn, trending }) => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [isMovieOrTv, setIsMovieOrTv] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrollMax, setIsScrollMax] = useState(false);
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

  const scrollInside = useRef(null);

  const scrollHorisontal = (scrollOffset) => {
    scrollInside.current.scrollLeft += scrollOffset;
    scrollInside.current.scrollLeft
      ? setIsScrollMax(true)
      : setIsScrollMax(false);
  };

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
          <ScrollHorizon
            isScrollMax={isScrollMax}
            scrollHorisontal={scrollHorisontal}
          />
        )}
      </NameBtnWrapper>
      <ScrollWrapper ref={scrollInside}>
        <Wrapper>
          {apiData?.results?.map((item) => (
            <MovieItem {...item} key={item.id} DisplayOption={DisplayOption} />
          ))}
        </Wrapper>
      </ScrollWrapper>
    </MainWrapper>
  );
};
