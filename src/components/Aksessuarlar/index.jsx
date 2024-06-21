import React from 'react';
import Title from '../Title';
import Container from '../../layout';
import ProductSlider from '../ProductSlider';
import aksessuarlar from '../../data/aksessuarlar';

const Aksessuarlar = () => {
  return (
    <div>
      <Title>Aksessuarlar</Title>
      <Container>
        <ProductSlider className={'aksessuar__slider'} dataProduct={aksessuarlar} />
      </Container>
    </div>
  );
};

export default Aksessuarlar;
