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
`;

export const ImageStyle = styled.div<{ len: number }>`
  height: 60%;
  width: ${(props) => (props.len > 5 ? "100%" : "auto")};
  display: flex;
  margin-left: 3%;
  margin-right: 3%;
  cursor: pointer;
  box-shadow: 20px 20px 10px 5px rgba(0, 0, 0, 0.25);
  position: relative;
`;
