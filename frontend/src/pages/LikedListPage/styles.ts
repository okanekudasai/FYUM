import styled from "styled-components";
import { black, white } from "../../styles/colors";

export const LikedListContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-color: ${black};
  overflow-x: hidden;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 15vh;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
`;

export const TitleP = styled.p`
  color: ${white};
  font-size: 3vw;
  font-family: "Kim jung chul Myungjo";
  font-weight: 700;
  margin: 0;
`;

export const TitleHr = styled.hr`
  width: 50%;
  margin-top: 0;
`;
