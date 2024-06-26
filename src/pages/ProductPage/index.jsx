import React from 'react';
import Container from '../../layout/index';
import classes from './Productpage.module.scss';

import img from '../../images/poligrafiya/flayer.png';

const ProductPage = () => {
  return (
    <div className={classes['productPage']}>
      <Container>
        <div className={classes['productPage__inner']}>
          <div className={classes['productPage__item']}>
            <h2>Flayer</h2>
            <p>
              Reklama flayerlari mahsulot yoki xizmatlaringiz ommalashishida qat’iy tarzda mijozlar
              e’tiborini jalb etish va buning uchun ko‘p xarajat talab etilmasligi bilan
              ahamiyatlidir. Flayerlar e’lon qilinayotgan mahsulot yoki xizmatlar to‘g‘risida
              batafsil ma’lumot berishi bilan ham o‘ziga xos xarakterga ega. Bu esa biznesingiz
              rivojida mijozlar ko‘lamini kengaytirish, mahsulot yoki xizmatlar savdo ko‘lamini
              oshirish hamda yuqori daromad olishda muhim ahamiyat kasb etadi.
            </p>
            <button className={classes['productPage__btn']}>Buyurtma berish</button>
          </div>
          <div className={classes['productPage__img']}>
            <img src={img} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
