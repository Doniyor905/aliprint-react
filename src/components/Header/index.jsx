import React from 'react';
import classes from './Header.module.scss';
import headerImg from '../../images/header/header.jpg';
const Header = () => {
  return (
    <div className={classes['header']}>
      <img src={headerImg} alt="" />
    </div>
  );
};

export default Header;
