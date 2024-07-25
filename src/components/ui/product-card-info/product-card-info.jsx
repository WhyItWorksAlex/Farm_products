import React, { useState } from "react";
import {
  StyledProductCardInfo,
  StyledTabs,
  TitleButton,
  TitleText,
  Content,
} from "./styles";
import Title, { TitleSize } from "/src/components/ui/title/title";

function ProductCardInfo({ tabsList = [], title }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledProductCardInfo>
      <Title as={"h3"} size={TitleSize.SMALL}>
        {title}
      </Title>
      <StyledTabs>
        {tabsList?.length &&
          tabsList.map((tabName, index) => (
            <TitleButton
              key={index}
              $active={index === activeTab}
              {...(index === activeTab
                ? {}
                : { onClick: () => setActiveTab(index) })}
            >
              <TitleText>{tabName.title}</TitleText>
            </TitleButton>
          ))}
      </StyledTabs>
      <Content>{tabsList[activeTab].content}</Content>
    </StyledProductCardInfo>
  );
}
export default ProductCardInfo;

// Упрощенная версия

// {tabsList?.length &&
//           tabsList.map((tabName, index) => {
//             if (index === activeTab) {
//               return (
//                 <TitleButton $active key={index}>
//                   <TitleText>{tabName.title}</TitleText>
//                 </TitleButton>
//               );
//             }
//             return (
//               <TitleButton key={index} onClick={() => setActiveTab(index)}>
//                 <TitleText>{tabName.title}</TitleText>
//               </TitleButton>
//             );
//           })}
