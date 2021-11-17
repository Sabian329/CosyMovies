import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffff;
  padding: 1rem 0 1rem 0;
  margin: 0 0 0 0;
  h2 {
    font-size: 0.8rem;
    margin: 0.5rem;
    em {
      font-style: unset;
      font-weight: 500;
    }
  }
`;

export const SocialWrapper = styled.div`
  display: flex;

  img {
    margin: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    filter: invert(50%);
  }
  a {
    :hover {
      img {
        filter: invert(70%);
      }
    }
  }
`;
