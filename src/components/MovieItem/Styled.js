import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-block;
  border-radius: 26px;
  height: 30rem;
  margin: 1rem 0.5rem 0 0.5rem;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  overflow-y: hidden;
  img {
    border-radius: 15px 15px 0 0;
    height: 23rem;
    width: 16rem;
  }
`;

export const CircularProgressWrapper = styled.div`
  top: 0;
  right: 0;
  backdrop-filter: blur(100px);
  border-radius: 50%;
  width: max-content;
  position: absolute;
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
