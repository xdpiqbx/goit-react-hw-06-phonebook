/* eslint-disable import/no-anonymous-default-export */
import type from './types';

const addContact = contact => ({
  type: type.ADD_CONTACT,
  payload: contact,
});

const deleteContact = id => ({
  type: type.DELETE_CONTACT,
  payload: id,
});

const filterContacts = value => ({
  type: type.FILTER_CONTACTS,
  payload: value,
});

export default { addContact, filterContacts, deleteContact };
