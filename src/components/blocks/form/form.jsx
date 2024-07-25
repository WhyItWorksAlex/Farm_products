import React from "react";
import ProductType from "/src/components/ui/product-type/product-type";
import FinishOrder from "/src/components/ui/finish-order/finish-order";
import { StyledForm } from "./styles";

function Form({ ...props }) {
  return (
    <StyledForm>
      <ProductType {...props} />
      <FinishOrder {...props} />
    </StyledForm>
  );
}

export default Form;

