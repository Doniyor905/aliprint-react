import React from 'react';
import classes from './Navbar.module.scss';
import logo from '../../images/logo/logo.svg';
import Container from '../../layout/';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
const Navbar = ({ poligrafiya, tashqiRekalama, aksessuarlar }) => {
  const [navMenu, setNavMenu] = React.useState(false);
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);

  return (
    <Container>
      <nav className={classes['nav']}>
        <img className={classes['nav__logo']} src={logo} alt="" />
        <div
          // onClick={() => setNavMenu(false)}
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
              <a
                href="#!"
                onMouseEnter={() => setIsVisibleMenu(true)}
                onMouseLeave={() => setIsVisibleMenu(false)}>
                <span>
                  POLIGRAFIYA{' '}
                  <FontAwesomeIcon className={classes['nav__link-icon']} icon={faChevronDown} />
                </span>
                <ul
                  className={
                    isVisibleMenu
                      ? classNames(classes['nav__dropdown'], classes['active'])
                      : classes['nav__dropdown']
                  }>
                  {poligrafiya.map((link) => (
                    <li className={classes['nav__dropdown-link']}>{link.title}</li>
                  ))}
                </ul>
              </a>
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
