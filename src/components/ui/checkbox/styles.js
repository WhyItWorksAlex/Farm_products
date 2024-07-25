import styled, { css } from "styled-components";
import tick from "/src/assets/tick.svg";

export const Label = styled.label`
  position: relative;
`;

export const LabelComponent = styled.span`
  display: block;
  padding: 15px 60px 14px 0;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
  color: ${(props) => props.theme.fontColorBlack};
  font-size: 18px;
  line-height: 27px;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const LabelMark = styled.span`
  position: absolute;
  top: 16px;
  right: 0;
  width: 24px;
  height: 24px;

  ${(props) =>
    props.$isChecked
      ? css`
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-color: #fc9b27;
          background-image: url(${tick});
          background-position: center center;
          background-repeat: no-repeat;
        `
      : css`
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-color: #f6f6f6;
        `};
`;

export const VisuallyHiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:focus-visible ~ * {
    outline: 1px solid #000000;
  }
`;
