import React from "react";
import { StyledProductCard } from "./styles";
import ProductCardInfo from "/src/components/ui/product-card-info/product-card-info";
import ProductDescription from "/src/components/ui/product-description/product-description";
import OptionList from "/src/components/ui/option-list/option-list";

function ProductCard({ good }) {
  const tabsList = [
    {
      title: "Описание",
      content: (
        <ProductDescription
          description={good.description}
          price={good.price}
          weight={good.weight}
        />
      ),
    },
    {
      title: "Характеристики",
      content: <OptionList list={good.characteristics} />,
    },
    {
      title: "Свойства",
      content: <OptionList list={good.properties} />,
    },
  ];
  return (
    <StyledProductCard>
      <img src={good.image} alt={good.title} width={248} height={248} />
      <ProductCardInfo tabsList={tabsList} title={good.title} />
    </StyledProductCard>
  );
}

export default ProductCard;
