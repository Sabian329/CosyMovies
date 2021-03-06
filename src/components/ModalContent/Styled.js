import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h2 {
    text-align: center;
    margin: 1rem;
  }
  @media ${device.tablet} {
    h2 {
      font-size: 1rem;
    }
  }
`;
export const PersonWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: scroll;
  padding-bottom: 10rem;
`;
export const People = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  border-radius: 23px;
  overflow: hidden;
  margin: 1rem;
  height: 29rem;
  border-bottom: 2px solid ${Colors.modalTheme};
  @media ${device.tablet} {
    height: max-content;

    p {
      max-width: 10rem;
    }
  }
`;
export const PersonName = styled.p`
  font-weight: 200;
  color: wheat;
  font-size: 1.5rem;
  max-width: 15rem;
  padding: 0 1rem 0 1rem;
  text-align: center;
`;
export const PersonCharacter = styled.p`
  font-weight: 200;
  color: #ffff;
  max-width: 15rem;
  padding: 0 1rem 0 1rem;
  text-align: center;
  @media ${device.tablet} {
    margin-bottom: 1rem;
  }
`;

export const PesronImage = styled.img`
  width: 15rem;
  height: 22rem;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, black),
    color-stop(0.35, black),
    color-stop(0.5, black),
    color-stop(0.65, black),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, rgba(0, 0, 0, 0))
  );
  @media ${device.tablet} {
    width: 13rem;
    height: 20rem;
    border-radius: 23px 23px 00;
  }
`;
