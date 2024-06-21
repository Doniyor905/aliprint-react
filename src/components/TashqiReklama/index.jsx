import React from 'react';
import Title from '../Title';
import ProductSlider from '../ProductSlider';
import tashqiReklama from '../../data/tashqiRekalama';
import Container from '../../layout';

const TashqiReklama = () => {
  return (
    <div id="tashqireklama">
      <Container>
        <Title>Tashqi Reklama</Title>
        <ProductSlider dataProduct={tashqiReklama} />
      </Container>
    </div>
  );
};

export default TashqiReklama;
