import React, { useState } from "react";
import {
  Label,
  LabelComponent,
  VisuallyHiddenInput,
  LabelMark,
} from "./styles";

function Checkbox({ text, value, name, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={`Good_${name[1]}`}
        onChange={onChange}
        onClick={() => setIsChecked(!isChecked)}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
      <LabelMark $isChecked={isChecked} />
    </Label>
  );
}

export default Checkbox;
