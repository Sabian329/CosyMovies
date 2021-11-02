import React, { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/Index";
import { MainWrapper, Wrapper } from "./Styled";

export const MoviesWrapper = ({ Baselink }) => {
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch(Baselink)
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
  }, []);

  return (
    <MainWrapper>
      <Wrapper>
        {apiData?.results?.map((item) => (
          <MovieItem {...item} key={item.id} />
        ))}
      </Wrapper>
    </MainWrapper>
  );
};
