import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device } from "../../Theme/MediaQueries";
import { InputSize } from "../../Theme/Sizing";

export const Wrapper = styled.section`
  background-color: ${Colors.mainTheme};
  display: flex;
  align-items: center;
  height: max-content;
  padding: ${InputSize.paddingWrapper};
  margin-left: 1rem;
  border-radius: 10px;
  p {
    color: wheat;
  }
  @media ${device.tablet} {
    padding: ${InputSize.paddingWrapperMobile};
    margin: 0;
    width: 90vw;
    justify-content: center;
    max-width: 300px;
    overflow: hidden;
  }

  input {
    border: none;
    background: transparent;
    color: #ffff;
    :focus {
      outline: none;
    }
    @media ${device.tablet} {
      font-size: 1.2rem;
      width: 80vw;
      max-width: 200px;
    }
  }
  button {
    background: transparent;
    color: ${Colors.modalTheme2};
    margin: ${InputSize.marginBtn};
    padding: ${InputSize.paddingBtn};
    :hover {
      color: red;
    }
    @media ${device.tablet} {
    }
  }
`;
export const IconWrapper = styled.div`
  bottom: 0;
  left: 0;
`;
