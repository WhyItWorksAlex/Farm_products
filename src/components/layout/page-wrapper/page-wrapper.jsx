import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";

import { MainWrapper } from "./styles.js";

import { Outlet } from "react-router-dom";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default PageWrapper;
