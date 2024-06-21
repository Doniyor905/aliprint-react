import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../App.css';
import poligrafiya from '../../data/poligrafiya';
import classes from './Poligrafiya.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Container from '../../layout';
import Title from '../Title';
import ProductSlider from '../ProductSlider';

const Poligrafiya = () => {
  return (
    <div className={classes['poligrafiya']} id="poligrafiya">
      <Container>
        <Title>POLIGRAFIYA</Title>
        <div className={classes['poligrafiya__inner']}>
          <ProductSlider dataProduct={poligrafiya} />
        </div>
      </Container>
    </div>
  );
};

export default Poligrafiya;
