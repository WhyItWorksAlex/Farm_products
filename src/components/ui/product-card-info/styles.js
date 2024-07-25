import styled from "styled-components";
import { P, Ul } from "/src/components/styled/index";

export const StyledProductCardInfo = styled.div`
  margin-left: 20px;
`;

export const StyledTabs = styled(Ul)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 16px;
`;

export const TitleButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  color: ${(props) =>
    props.$active ? props.theme.colorWhite : props.theme.fontColorBlack};
  background-color: ${(props) =>
    props.$active ? props.theme.panelBackgroundColor : ""};
`;

export const TitleText = styled(P)`
  font-size: 14px;
  line-height: 21px;
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 21px;
`;
