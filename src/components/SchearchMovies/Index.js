import React, { useState, useEffect } from "react";
import { MovieItem } from "../MovieItem/Index";
import { Wrapper } from "./Styled";
import { useSelector } from "react-redux";
import { selectSearch } from "../../Redux/selectors";
import { LoadingWindow } from "../LoadingWindow/Index";
import { NoResults } from "../NoResult/Index";

export const SearchMovies = () => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(false);
  const searchState = useSelector(selectSearch);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=6470b291b6975b86666f1d6afd74d966&language=en-US&query=${searchState.currentValue}&page=1`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setApiData({ ...result });
          console.log(apiData.results);
        },
        (error) => {
          setErrors(error);
          console.log(errors);
        }
      );
  }, [searchState.currentValue]);
  return (
    <>
      {apiData.length === 0 ? (
        <>
          <LoadingWindow />
        </>
      ) : (
        <Wrapper>
          {apiData.results.length ? (
            apiData?.results?.map((item) => (
              <MovieItem {...item} key={item.id} />
            ))
          ) : (
            <NoResults />
          )}
        </Wrapper>
      )}
    </>
  );
};
