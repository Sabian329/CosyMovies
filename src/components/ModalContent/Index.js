import { Heading, Link } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { imageBase } from "../../Constatns/ImageBase";
import {
  Companies,
  CompaniesWrapper,
  CompanyCountry,
  CompanyFlag,
  CompanyLogo,
  CompanyName,
  Wrapper,
} from "./Styled";

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
    <Wrapper>
      <div>
        <img src={`${imageBase}${apiData?.backdrop_path}`} alt="company logo" />
        <img
          src={`${imageBase}${apiData?.belongs_to_collection?.poster_path}`}
          alt="company logo"
        />
        <p>{apiData.tagline}</p>
        <p>{apiData.original_title}</p>
        {apiData?.genres?.map((items) => (
          <Heading>{items.name}</Heading>
        ))}
        <p>{apiData.overview}</p>
        <Link href={apiData.homepage}>homepage</Link>
        <CompaniesWrapper>
          {apiData?.production_companies?.map((company) => (
            <Companies>
              <CompanyName>{company.name}</CompanyName>
              <div>
                <CompanyCountry>{company.origin_country}</CompanyCountry>
                <CompanyFlag
                  src={`https://flagicons.lipis.dev/flags/4x3/${company.origin_country.toLowerCase()}.svg`}
                  alt="flag"
                />
              </div>
              <CompanyLogo
                src={`${imageBase}${company.logo_path}`}
                alt="company logo"
              />
            </Companies>
          ))}
        </CompaniesWrapper>
      </div>
    </Wrapper>
  );
};
