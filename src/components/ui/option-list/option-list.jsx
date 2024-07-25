import React from "react";
import { StyledTabContent, StyledCharacteristic, StyledName } from "./styles";

function OptionList({ list }) {
  return (
    <StyledTabContent>
      {list?.length &&
        list.map((characteristic) => {
          return (
            <StyledCharacteristic key={characteristic.name}>
              <StyledName>{characteristic.name}&nbsp;</StyledName>
              {characteristic.value}
            </StyledCharacteristic>
          );
        })}
    </StyledTabContent>
  );
}

export default OptionList;
