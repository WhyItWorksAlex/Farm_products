import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import goods from "/src/mocks/goods";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "/src/components/pages/main-page/main-page";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import { AppRoute } from "/src/const";
import ScrollToTop from "/src/components/ui/scroll-to-top/scroll-to-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              exact
              path={AppRoute.ORDER}
              element={<BuyPage goods={goods} />}
            />
            <Route
              path="*"
              element={<h1>Ошибка 404. Страница не существует.</h1>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
