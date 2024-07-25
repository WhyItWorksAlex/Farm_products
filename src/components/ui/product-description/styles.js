import styled from "styled-components";
import { P } from "/src/components/styled/index";

export const StyledTabContent = styled.div`
  margin-top: 16px;
  font-size: 14px;
  line-height: 21px;
`;

export const StyledPrice = styled(P)`
  margin-top: 14px;
  display: inline-block;
  padding: 4px 8px;
  font-weight: 700;
  background-color: ${(props) => props.theme.backgroundColorBlue};
`;
