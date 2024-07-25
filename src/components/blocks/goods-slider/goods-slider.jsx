import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { StyledSwiper } from "./styles";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import ProductCard from "/src/components/ui/product-card/product-card";

function GoodsSlider({ goods, setSwiperRef }) {
  return (
    <StyledSwiper
      spaceBetween={12}
      direction="vertical"
      slidesPerView={"auto"}
      freeMode={true}
      scrollbar={{ draggable: true }}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      onSwiper={setSwiperRef}
    >
      {goods?.length &&
        goods.map((good) => (
          <SwiperSlide key={good.id}>
            <ProductCard good={good} />
          </SwiperSlide>
        ))}
    </StyledSwiper>
  );
}

export default GoodsSlider;
