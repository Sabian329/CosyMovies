import styled from "styled-components";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.section`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 5rem;
  @media ${device.tablet} {
    height: 20rem;
    img {
      width: 15rem;
    }
  }

  p {
    font-size: 1rem;
    color: #ffff;
    text-align: center;
    padding: 0 2rem 0 2rem;
  }
`;

export const Cursor = styled.img`
  width: 3rem;
  position: absolute;
  right: 1rem;
  top: 5rem;
`;
export const Animate = styled.div`
  position: relative;
  margin: 2rem;
  path {
  }
`;
