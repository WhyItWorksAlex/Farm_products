import React from "react";
import Title, { TitleSize } from "../title/title";
import { Feature, Image, Owner, Header, Text } from "./styles";
// Карточка
function FeatureCard({
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image, // иконка
}) {
  return (
    <Feature isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner>{owner}</Owner>
          <Title size={TitleSize.EXTRA_SMALL} as="h3">
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Feature>
  );
}

export default FeatureCard;
