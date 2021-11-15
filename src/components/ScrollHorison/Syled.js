import styled from "styled-components";

export const BtnRight = styled.button`
  position: absolute;
  top: 20rem;
  right: 0;
  z-index: 100;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: 1rem;
  backdrop-filter: blur(30px);

  :hover {
    path {
      color: red;
    }
  }
`;
export const BtnLeft = styled.button`
  position: absolute;
  top: 20rem;
  left: 0;
  z-index: 100;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: 1rem;
  backdrop-filter: blur(30px);

  :hover {
    path {
      color: red;
    }
  }
`;
