import React from 'react';
import classes from './Navbar.module.scss';
import logo from '../../images/logo/logo.svg';
import Container from '../../layout/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
const Navbar = () => {
  const [navMenu, setNavMenu] = React.useState(false);
  return (
    <Container>
      <nav className={classes['nav']}>
        <img className={classes['nav__logo']} src={logo} alt="" />
        <div
          onClick={() => setNavMenu(false)}
          className={
            navMenu
              ? classNames(classes['nav__list-wrapper'], classes['active'])
              : classes['nav__list-wrapper']
          }>
          <ul
            className={
              navMenu ? classNames(classes['nav__list'], classes['active']) : classes['nav__list']
            }>
            <FontAwesomeIcon
              onClick={() => setNavMenu(false)}
              icon={faClose}
              className={classes['nav__close']}
            />
            <li className={classes['nav__link']}>
              <a href="#poligrafiya">POLIGRAFIYA</a>
            </li>
            <li className={classes['nav__link']}>
              <a href="#tashqireklama">TASHQI REKLAMA</a>
            </li>
            <li className={classes['nav__link']}>
              <a href="#aksessuarlar">Aksessuarlar</a>
            </li>
            <li className={classes['nav__link']}>
              <a href="#hamkorlar">Hamkorlar</a>
            </li>
          </ul>
        </div>
        <div className={classes['nav__social']}>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTelegram} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <FontAwesomeIcon
          onClick={() => setNavMenu(true)}
          className={classes['nav__burger']}
          icon={faBars}
        />
      </nav>
    </Container>
  );
};

export default Navbar;
