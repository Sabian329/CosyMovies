import { Heading, Link } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { imageBase } from "../../Constatns/ImageBase";

export const ModalContent = ({ movie_id, isOpen }) => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=6470b291b6975b86666f1d6afd74d966&language=en-US`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setApiData({ ...result });
          console.log(`moodal ${apiData}`);
        },
        (error) => {
          setErrors(error);
        }
      );
  }, [isOpen]);

  return (
    <div>
      <div>
        <p>{apiData.original_title}</p>
        {apiData?.genres?.map((items) => (
          <Heading>{items.name}</Heading>
        ))}
        <p>{apiData.overview}</p>
        <Link href={apiData.homepage}>homepage</Link>
        {apiData?.production_companies?.map((company) => (
          <div>
            <p>{company.name}</p>
            <p>{company.origin_country}</p>
            <img src={`${imageBase}${company.logo_path}`} alt="company logo" />
          </div>
        ))}
      </div>
    </div>
  );
};
