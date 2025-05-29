import font from "@/components/desgin-system/font";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type Font = keyof typeof font;

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties["color"];
  fontType?: Font;
  width?: CSSProperties["width"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
  whiteSpace?: CSSProperties["whiteSpace"];
  tag?: "span" | "p";
}

const Text = ({
  children,
  color,
  fontType = "Title1",
  width = "auto",
  textAlign = "left",
  ellipsis = false,
  whiteSpace = "nowrap",
  tag = "span",
}: TextProps) => {
  return (
    <StyledText
      style={{ color, textAlign, width, whiteSpace }}
      fontType={fontType}
      as={tag}
      ellipsis={ellipsis}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.span.withConfig({
  shouldForwardProp: (prop) => !["fontType", "ellipsis"].includes(prop),
})<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => font[fontType]};
  ${(props) =>
    props.ellipsis &&
    css`
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
