import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  width: 6rem;
  position: relative;
  margin: 0 0.2rem 0 0.2rem;
  border-radius: 6px;
  overflow: hidden;

  img {
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, black),
      color-stop(0.4, black),
      color-stop(0.6, black),
      color-stop(0.7, black),
      color-stop(0.8, rgba(0, 0, 0, 0.6)),
      color-stop(1, rgba(0, 0, 0, 0))
    );
  }
`;
export const Text = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 0 0 0.1rem;

  width: 100%;
  padding: 0 0 0.5rem 0.3rem;

  h1 {
    font-size: 0.7rem;
    color: wheat;
    bottom: 0;
    z-index: 100;
    font-weight: 700;
  }
  p {
    font-size: 0.5rem;
    color: #ffff;
    bottom: 0;
    z-index: 100;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`;
export const SmallCastWrapper = styled.div`
  display: flex;
  width: max-content;
`;
