import React from 'react';
import classes from './ModalForm.module.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const ModalForm = ({ modal, setModal }) => {
  return (
    <div className={modal ? classNames(classes['wrapper'], classes['active']) : classes['wrapper']}>
      <div className={modal ? classNames(classes['modal'], classes['active']) : classes['modal']}>
        <FontAwesomeIcon
          onClick={() => setModal(false)}
          className={classes['modal__close']}
          icon={faClose}
        />
        <form className={classes['modal__form']}>
          <label className={classes['input']}>
            <p>Ism</p>
            <input type="text" />
          </label>
          <label className={classes['input']}>
            <p>Telefon</p>
            <input type="text" />
          </label>
          <label className={classes['message']}>
            <p>Xabaringizni qoldiring</p>
            <textarea name="" id=""></textarea>
          </label>
          <button className={classes['modal__btn']}>Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
