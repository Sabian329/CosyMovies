import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
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
export const MDB = styled.img`
  width: 9.5rem;
  margin: 1rem;
  filter: invert(100%);
  :hover {
    filter: invert(0%);
  }
`;
export const SocialWrapper = styled.div`
  display: flex;

  img {
    margin: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  a {
    :hover {
      img {
        filter: invert(100%);
      }
    }
  }
`;
