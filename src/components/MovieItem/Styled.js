import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

export const MainWrapper = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-block;
  border-radius: 26px;
  height: 36rem;
  width: 20rem;
  margin: 0 1rem 0 1rem;
  -webkit-box-shadow: 5px 5px 20px ${Colors.shadow};
  box-shadow: 5px 5px 20px ${Colors.shadow};
  overflow-y: hidden;
  img {
    border-radius: 15px 15px 0 0;
    height: 30rem;
    width: 20rem;
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
