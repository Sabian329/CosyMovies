import { Heading } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { imageBase } from "../../Constatns/ImageBase";
import movieStar from "../../Assets/moviestar.png";
import { NoResults } from "../NoResult/Index";
import {
  People,
  PersonCharacter,
  PersonName,
  PersonWrapper,
  PesronImage,
  Wrapper,
} from "./Styled";
import { SmallCast } from "../SmallCast/Index";
import { SmallCastWrapper } from "../SmallCast/Styled";
import { useWindowSize } from "../../Hooks/useWindowSize";

export const ModalContent = ({
  movie_id,
  isOpen,
  original_name,
  original_title,
  DisplayOption,
  media_type,
  isSmall,
}) => {
  const [apiData, setApiData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    size.width >= 768 ? setIsMobile(false) : setIsMobile(true);
  }, [size]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${
        media_type || DisplayOption()
      }/${movie_id}/credits?api_key=6470b291b6975b86666f1d6afd74d966&language=en-US`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setApiData({ ...result });
        },
        (error) => {
          setErrors(error);
        }
      );
  }, [isOpen]);

  return (
    <Wrapper>
      {isSmall ? (
        <SmallCastWrapper>
          {apiData?.cast?.map(
            (item, index) =>
              index <= (isMobile ? 1 : 2) && (
                <SmallCast {...item} index={index} />
              )
          )}
        </SmallCastWrapper>
      ) : (
        <>
          <Heading padding="0.5rem" color="wheat" fontWeight="light">
            {`Cast of ${original_name || original_title}`}
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
        </>
      )}
    </Wrapper>
  );
};
// ?.filter((item) => item.known_for_department === "Acting")
