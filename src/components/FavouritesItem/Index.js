import React, { useEffect, useState } from "react";
import { MovieItem } from "../MovieItem/Index";

export const FavouritesItem = ({ id, arr, media_type }) => {
  const [apiData, setApiData] = useState("");
  const [errors, setErrors] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=6470b291b6975b86666f1d6afd74d966&language=en-US`
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
  }, [arr]);
  return (
    <MovieItem
      poster_path={apiData.poster_path}
      overview={apiData.overview}
      release_date={apiData.release_date}
      vote_average={apiData.vote_average}
      original_title={apiData.original_title}
      original_name={apiData.original_name}
      backdrop_path={apiData.backdrop_path}
      first_air_date={apiData.first_air_date}
      id={id}
      media_type={media_type}
    />
  );
};
