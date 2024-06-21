import React from 'react';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Container from '../../layout';
import classes from './Footer.module.scss';
import footerLogo from '../../images/logo/footer_logo.png';
const Footer = () => {
  return (
    <div>
      <div className={classes['footer']}>
        <Container>
          <div className={classes['footer__inner']}>
            <img className={classes['footer__logo']} src={footerLogo} alt="" />
            <p className={classes['footer__text']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra volutpat dictumst
              lectus in euismod amet. Dignissim quis at neque pellentesque faucibus a, in vel
              ultrices. Sed lobortis consectetur amet sodales non at lacus.
            </p>
            <div className={classes['footer__social']}>
              <a href="#!">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
