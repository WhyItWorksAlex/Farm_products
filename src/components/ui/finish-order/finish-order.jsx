import React, { useState } from "react";
import {
  StyledFinishOrder,
  Address,
  Price,
  PriceTitle,
  StyledButton,
} from "./styles";
import Title, { TitleSize } from "/src/components/ui/title/title";

function FinishOrder({ selectedGoods, goods }) {
  function findGood(value) {
    return goods.find((good) => good.id === value);
  }

  function summary() {
    let finalPriceArray = [];
    finalPriceArray = selectedGoods.map((value) => findGood(value).price);
    return finalPriceArray.length
      ? finalPriceArray.reduce((a, b) => a + b)
      : "0";
  }

  const handleBuyClick = (event) => {
    event.preventDefault();
    alert(
      `Вы заказали:\n${selectedGoods
        .map((value) => findGood(value).title)
        .join("\n")}\nНа сумму ${summary()} рублей по адресу: ${address} 
        `
    );
  };

  const [address, setAddress] = useState("");

  return (
    <StyledFinishOrder>
      <Title as="h4" size={TitleSize.EXTRA_SMALL}>
        Сделать заказ
      </Title>
      <label>
        <Address
          onChange={(e) => {
            const value = e.target.value;
            setAddress(value);
          }}
          type="text"
          placeholder="Введите адрес доставки"
        />
      </label>
      <Price>
        <PriceTitle>Цена</PriceTitle>
        {summary()} руб
      </Price>
      <StyledButton
        type="submit"
        onClick={handleBuyClick}
        disabled={!(address && selectedGoods.length)}
      >
        Купить
      </StyledButton>
    </StyledFinishOrder>
  );
}

export default FinishOrder;
