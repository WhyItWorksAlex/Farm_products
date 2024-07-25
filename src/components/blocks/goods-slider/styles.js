import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 747px;
  height: 713px;
  margin-right: -20px;

  .swiper-wrapper {
    display: grid;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
