import styled from "styled-components";
import { Ul } from "/src/components/styled/index";

export const StyledProductType = styled.div`
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px 20px 12px;
`;

export const CheckboxWrapper = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 12px;
`;
