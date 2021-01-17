import PropTypes from 'prop-types';

import React, { useState } from 'react';

import { connect } from 'react-redux';
import actions from '../../redux/actions';

import s from './ContactForm.module.scss';

import { v4 as uuidv4 } from 'uuid';

const ContactForm = ({ allContacts, addContactToStore }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const getContact = newContact => {
    if (allContacts) {
      const res = allContacts.find(contact => contact.name === newContact.name);
      if (res) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }
    addToLocalStorage(newContact);
    addContactToStore(newContact);
  };

  const addToLocalStorage = newContact => {
    const contactsFromLocalstorage = localStorage.getItem('contacts');
    localStorage.setItem(
      'contacts',
      JSON.stringify([
        newContact,
        ...(JSON.parse(contactsFromLocalstorage) ?? []),
      ]),
    );
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (name && number) {
      getContact({
        id: uuidv4(),
        name,
        number,
      });
    }
    setName('');
    setNumber('');
  };

  const onChangeInputHandler = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  return (
    <div className={s.ContactForm}>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span className={s.ContactForm__title}>Name</span>
          <input
            className={s.ContactForm__input}
            type="text"
            name="name"
            value={name}
            onChange={onChangeInputHandler}
          />
        </label>
        <label>
          <span className={s.ContactForm__title}>Phone</span>
          <input
            className={s.ContactForm__input}
            type="text"
            name="number"
            value={number}
            onChange={onChangeInputHandler}
          />
        </label>
        <button className={s.ContactForm__btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  allContacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContactToStore: contacts => dispatch(actions.addContact(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  getContact: PropTypes.func,
  onSubmitHandler: PropTypes.func,
  onChangeInputHandler: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
