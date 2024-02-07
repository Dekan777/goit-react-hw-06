import './App.css';

// import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { InitialContacts } from './data/InitialContacts';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <div>
      <Phonebook text="Phonebook" />

      <ContactForm />

      <SearchBox />

      <ContactList value={InitialContacts} />
    </div>
  );
};
