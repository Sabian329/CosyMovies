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
    width: 300px;
  }
`;

export const Dot = styled.div`
  width: 1.2vh;
  height: 1.2vh;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  bottom: 450px;
  right: 450px;
`;
