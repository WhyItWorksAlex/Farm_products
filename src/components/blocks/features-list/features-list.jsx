import React from "react";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import FeatureCard from "../../ui/feature-card/feature-card";
import { FeaturesWrapper, Features, FeatureItem } from "./styles";

// список преимуществ
function FeaturesList({ features }) {
  return features?.length ? (
    <FeaturesWrapper>
      <Title as="h2">Почему фермерские продукты лучше?</Title>
      <Features>
        {features.map((feature) => (
          <FeatureItem key={feature.id}>
            <FeatureCard {...feature} />
          </FeatureItem>
        ))}
      </Features>
      <Button link="/order">Купить</Button>
    </FeaturesWrapper>
  ) : null;
}

export default FeaturesList;
