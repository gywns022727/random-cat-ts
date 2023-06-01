import styled from "styled-components";
import type { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  padding: 8px 12px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50vh;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: ${({ color }) => color || "#333"};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ pointer }) => pointer && "cusor: pointer;"}
  
  > a {
    text-decoration: none;
    color: inherit;
  }
`;

/* ${({ children }) =>
  children ? "> *{padding: 8px 12px;}" : "padding: 8px 12px;"} */
