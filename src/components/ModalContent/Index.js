import { Heading, Link } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { imageBase } from "../../Constatns/ImageBase";
import movieStar from "../../Asets/moviestar.png";
import { NoResults } from "../NoResult/Index";
import {
  People,
  PersonCharacter,
  PersonName,
  PersonRole,
  PersonWrapper,
  PesronImage,
  Wrapper,
} from "./Styled";

export const ModalContent = ({
  movie_id,
  isOpen,
  original_name,
  original_title,
}) => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=6470b291b6975b86666f1d6afd74d966&language=en-US`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setApiData({ ...result });
          console.log(apiData.cast);
        },
        (error) => {
          setErrors(error);
        }
      );
  }, [isOpen]);

  return (
    <Wrapper>
      <Heading padding="0.5rem" color="wheat" fontWeight="light">
        {`Creids of ${original_name || original_title}`}
      </Heading>
      <PersonWrapper>
        {!apiData?.cast?.length ? (
          <NoResults />
        ) : (
          apiData?.cast
            ?.filter((item) => item.known_for_department === "Acting")
            .map((person) => (
              <People>
                <PesronImage
                  src={
                    person.profile_path === null
                      ? movieStar
                      : imageBase + person.profile_path
                  }
                  alt="company logo"
                />
                <PersonName>{person.name}</PersonName>
                <PersonCharacter>{person.character}</PersonCharacter>
              </People>
            ))
        )}
      </PersonWrapper>
    </Wrapper>
  );
};
// ?.filter((item) => item.known_for_department === "Acting")
