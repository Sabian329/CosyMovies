import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

export const Wrapper = styled.div``;
export const CompaniesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.modalTheme2};
  border-radius: 23px;
  padding: 1rem;
  width: 20rem;
  height: 20rem;
  margin: 1rem;
`;
export const CompanyName = styled.p`
  color: wheat;
  font-size: 1.5rem;
`;
export const CompanyCountry = styled.p`
  color: #ffff;
  font-size: 1rem;
`;
export const CompanyLogo = styled.img`
  width: 15rem;
`;
export const CompanyFlag = styled.img`
  width: 2rem;
`;
