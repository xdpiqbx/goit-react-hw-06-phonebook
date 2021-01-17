import s from './App.module.scss';
import ContactForm from './components/ContactForm/ContactForm ';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App() {
  return (
    <div className={s.AppContainer}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contacts__title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
