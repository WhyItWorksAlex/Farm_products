import Button from "/src/components/ui/button/button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.fontColorBlack};

  &:hover {
    background-color: ${(props) => props.theme.colorWhite};
    box-shadow: none;
    opacity: 0.6;
  }
`;
