import React from 'react';
import classes from './ModalForm.module.scss';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import axios from 'axios';

const ModalForm = ({ modal, setModal, nameProduct }) => {
  const [nameForm, setNameForm] = React.useState('');
  const [phoneForm, setPhoneForm] = React.useState('');
  const [descForm, setDescForm] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const errors = {};
    if (!nameForm.trim()) errors.nameForm = 'Имя обязательно';
    if (!phoneForm) {
      errors.phoneForm = 'Номер обязателен';
    } else if (!/^(\+?998\d{9}|\d{9})$/.test(phoneForm)) {
      errors.phoneForm = 'Номер введен неверно';
    }
    if (!descForm.trim()) errors.descForm = 'Сообщение обязательно';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7407951644:AAEQe05C1zAxh82HkVSqQ7H8o-3Oxf2Pj5w';
    const chatID = 696151337;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = `**Имя:** ${nameForm}\n**Телефон:** ${phoneForm} \n**Сообщения:** ${descForm}\n**Продукт:** ${nameProduct}`;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post(url, {
        chat_id: chatID,
        text: text,
        parse_mode: 'Markdown',
      });
      alert('Сообщение отправлено');
      setNameForm('');
      setPhoneForm('');
      setDescForm('');
      setModal(false);
      setErrors({});
    } catch (error) {
      console.log('Ошибка отправки сообщения', error);
      alert('Не удалось отправить сообщение');
    }
  };

  return (
    <div className={modal ? classNames(classes['wrapper'], classes['active']) : classes['wrapper']}>
      <div className={modal ? classNames(classes['modal'], classes['active']) : classes['modal']}>
        <FontAwesomeIcon
          onClick={() => setModal(false)}
          className={classes['modal__close']}
          icon={faClose}
        />
        <form onSubmit={handleSubmit} className={classes['modal__form']}>
          <p>{nameProduct}</p>
          <label className={classes['input']}>
            <p>Ism</p>
            {errors.nameForm && <p style={{ color: 'red' }}>{errors.nameForm}</p>}
            <input
              name="name"
              value={nameForm}
              onChange={(e) => setNameForm(e.target.value)}
              type="text"
              required
            />
          </label>
          <label className={classes['input']}>
            <p>Telefon</p>
            {errors.phoneForm && <p style={{ color: 'red' }}>{errors.phoneForm}</p>}
            <input
              name="phone"
              value={phoneForm}
              onChange={(e) => setPhoneForm(e.target.value)}
              type="text"
              required
            />
          </label>
          <label className={classes['message']}>
            <p>Xabaringizni qoldiring</p>
            {errors.descForm && <p style={{ color: 'red' }}>{errors.descForm}</p>}
            <textarea
              name="desc"
              value={descForm}
              onChange={(e) => setDescForm(e.target.value)}
              required></textarea>
          </label>
          <button type="submit" className={classes['modal__btn']}>
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
