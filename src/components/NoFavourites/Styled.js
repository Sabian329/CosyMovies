import styled from "styled-components";

export const Wrapper = styled.section`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 5rem;

  img {
    display: block;
  }
  p {
    font-size: 1rem;
    color: #ffff;
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
