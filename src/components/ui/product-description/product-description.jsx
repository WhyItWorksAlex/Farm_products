import React from "react";
import { StyledTabContent, StyledPrice } from "./styles";
import { P } from "/src/components/styled/index";

function ProductDescription({ description, price, weight }) {
  return (
    <StyledTabContent>
      <P> {description} </P>
      <StyledPrice>
        {price} руб./ {weight} гр.
      </StyledPrice>
    </StyledTabContent>
  );
}

export default ProductDescription;
