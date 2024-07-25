import styled from "styled-components";
import { P } from "/src/components/styled/index";
import Button from "/src/components/ui/button/button";

export const StyledFinishOrder = styled.div`
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px 20px 20px;
`;

export const Address = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f6f6f6;
  min-width: 313px;
  padding: 14px 12px 13px;
  box-sizing: border-box;
  margin-top: 24px;
  margin-bottom: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  line-height: 21px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.buttonColor};
  }
`;

export const Price = styled(P)`
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const PriceTitle = styled.span`
  display: block;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;
  font-weight: 400;
`;

export const StyledButton = styled(Button)`
  min-width: 313px;
`;
