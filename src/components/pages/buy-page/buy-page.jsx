import React, { useState } from "react";
import GoodsSlider from "/src/components/blocks/goods-slider/goods-slider";
import Form from "/src/components/blocks/form/form";
import { BuyPageWrapper } from "./styles";

function BuyPage({ goods }) {
  const [selectedGoods, setSelectedGoods] = useState([]);
  const [swiperRef, setSwiperRef] = useState("");

  const toSelectedGood = (index) => {
    swiperRef.slideTo(index);
  };

  return (
    <BuyPageWrapper>
      {goods?.length ? (
        <>
          <Form
            goods={goods}
            selectedGoods={selectedGoods}
            setSelectedGoods={setSelectedGoods}
            toSelectedGood={toSelectedGood}
          />
          <GoodsSlider goods={goods} setSwiperRef={setSwiperRef} />
        </>
      ) : (
        "Продукты были слишком вкусные и их разобрали"
      )}
    </BuyPageWrapper>
  );
}

export default BuyPage;
