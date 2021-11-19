import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { device } from "../../Theme/MediaQueries";
import { InputSize } from "../../Theme/Sizing";

export const Wrapper = styled.nav`
  background-color: ${Colors.mainTheme};
  display: flex;
  align-items: center;
  height: max-content;
  padding: ${InputSize.paddingWrapper};
  margin-left: 1rem;
  border-radius: 10px;

  @media ${device.tablet} {
    padding: ${InputSize.paddingWrapperMobile};
    justify-content: space-between;
    width: 90vw;
    margin: 0;
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
      width: 8rem;
    }
  }
  button {
    background: transparent;
    color: ${Colors.modalTheme2};
    margin: ${InputSize.marginBtn};
    padding: ${InputSize.paddingBtn};
    :hover {
      color: #ff0000;
    }
    @media ${device.tablet} {
      margin: 0;
    }
  }
`;
export const IconWrapper = styled.div`
  bottom: 0;
  left: 0;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
`;
