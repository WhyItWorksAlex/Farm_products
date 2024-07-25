import styled from "styled-components";
import { Section, Ul } from "/src/components/styled/index";

export const FeaturesWrapper = styled(Section)`
  flex-direction: column;
  align-items: center;
`;

export const Features = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 64px;
  margin-left: -20px;
  font-size: 0;
  line-height: 0;
  text-align: center;
`;

export const FeatureItem = styled.li`
  display: inline-block;
  margin-left: ${(props) => props.theme.indent};
  margin-top: ${(props) => props.theme.indent};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  vertical-align: top;
  text-align: left;
  overflow: hidden;
`;
