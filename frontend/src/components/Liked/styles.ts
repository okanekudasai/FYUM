import styled from "styled-components";
import { white } from "../../styles/colors";

export const ImageTitleStyle = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 20px;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 110%;
  color: ${white};

  @media (max-width: 768px) {
    width: 70vw;
    font-size: 5vw;
    padding: 0;
    margin-left: 3vw;
  }
`;

export const ImageStyle = styled.div<{ len: number }>`
  height: 60%;
  width: 100%;
  display: flex;
  margin-left: 3%;
  margin-right: 3%;
  cursor: pointer;
  box-shadow: 20px 20px 10px 5px rgba(0, 0, 0, 0.25);
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 30%;
    font-size: 5vw;
    width: 20vw;
    height: auto;
    margin-left: 13vw;
    box-shadow: none;
  }
`;

export const NoContent = styled.p`
  color: ${white};
  font-size: 1.3vw;
  margin-top: 30vh;
  margin-left: 43.5vw;

  @media (max-width: 768px) {
    font-size: 3vw;
    margin-top: 75%;
    margin-left: 35vw;
  }
`;
