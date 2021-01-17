import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { getFilter, getAllContacts } from '../../redux/selectors';

import Contact from '../Contact';

import s from './ContactList.module.scss';

// const ContactList = ({ contacts, deleteContact }) => {
const ContactList = () => {
  // const contacts = useSelector(({contacts}) => getFilteredContacts(contacts.items, contacts.filter))
  const contacts = useSelector(state =>
    getFilteredContacts(getAllContacts(state), getFilter(state)),
  );
  const dispatch = useDispatch();
  if (contacts.length > 0) {
    return (
      <ul className={s.list}>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            // deleteContact={deleteContact}
            deleteContact={() => dispatch(actions.deleteContact(contact.id))}
            key={contact.id}
          />
        ))}
      </ul>
    );
  } else {
    return <h2>There is no contacts</h2>;
  }
};

const getFilteredContacts = (contacts, filter) => {
  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  } else {
    return contacts;
  }
};

// const mapStateToProps = ({ contacts }) => ({
//   contacts: getFilteredContacts(contacts.items, contacts.filter),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;

ContactList.protoTypes = {
  contacts: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  deleteContact: PropTypes.func,
};
