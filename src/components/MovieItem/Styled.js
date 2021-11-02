import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-block;
  background-color: black;
  height: 30rem;
  margin: 0 0.5rem 0 0.5rem;
  img {
    height: 23rem;
    width: 16rem;
  }
`;

export const CircularProgressWrapper = styled.div`
  width: 16rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Title = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23rem;
  width: 16rem;
  backdrop-filter: blur(15px);
  top: 0;
  color: white;
`;
