import PropTypes from 'prop-types';
import React from 'react';

import s from './Contact.module.scss';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={s.listItem}>
      <span className={s.name}>{contact.name}: </span>
      <span className={s.number}>{contact.number}</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
};
