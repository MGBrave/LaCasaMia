import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Prato do dia</h1>
      <p>Filé mignon ao molho ferrugem </p>
      <FeatureButton>Peça agora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;