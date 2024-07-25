import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo2.svg";
import { StyledLogo, TextLogo } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo({}) {
  const pageUrl = useLocation().pathname;

  return (
    <StyledLogo
      {...(pageUrl === AppRoute.MAIN ? { as: "span" } : { to: AppRoute.MAIN })}
    >
      <LogoImage />
      <TextLogo>Фермерские продукты</TextLogo>
    </StyledLogo>
  );
}

export default Logo;
