import React from "react";
import { StyledProductType, CheckboxWrapper } from "./styles";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Checkbox from "/src/components/ui/checkbox/checkbox";

function ProductType({
  goods,
  selectedGoods,
  setSelectedGoods,
  toSelectedGood,
}) {
  const handleChange = (value) => {
    let updatedArray = [...selectedGoods];
    const valueIndex = updatedArray.indexOf(value);
    if (valueIndex === -1) {
      updatedArray.push(value);
      toSelectedGood(value);
    } else {
      updatedArray.splice(valueIndex, 1);
    }
    setSelectedGoods(updatedArray);
  };

  return (
    <StyledProductType>
      <Title as="h4" size={TitleSize.EXTRA_SMALL}>
        Выберите продукты
      </Title>
      <CheckboxWrapper>
        {goods?.length &&
          goods.map((good) => {
            return (
              <li key={good.id}>
                <Checkbox
                  selectedGoods = {selectedGoods}
                  text={good.title}
                  value={good.id}
                  name={Object.keys(good)}
                  onChange={() => {
                    handleChange(good.id);
                  }}
                ></Checkbox>
              </li>
            );
          })}
      </CheckboxWrapper>
    </StyledProductType>
  );
}

export default ProductType;
