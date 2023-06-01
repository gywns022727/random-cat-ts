import type { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  color?: string;
  pointer?: boolean;
}

export default function index(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

export type { ButtonProps };
