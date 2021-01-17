import type from './types';

const initialState = {
  contacts: {
    items: [...(JSON.parse(localStorage.getItem('contacts')) ?? [])],
    filter: '',
  },
};

const reducerContacts = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_CONTACT:
      return {
        contacts: {
          items: [action.payload, ...state.contacts.items],
          filter: state.contacts.filter,
        },
      };
    case type.DELETE_CONTACT:
      const contactsFromLocalstorage = localStorage.getItem('contacts');
      const newContactList = JSON.parse(contactsFromLocalstorage).filter(
        contact => contact.id !== action.payload,
      );
      localStorage.setItem('contacts', JSON.stringify(newContactList));
      return {
        contacts: {
          items: newContactList,
          filter: state.contacts.filter,
        },
      };
    case type.FILTER_CONTACTS:
      return {
        contacts: {
          items: state.contacts.items,
          filter: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducerContacts;
