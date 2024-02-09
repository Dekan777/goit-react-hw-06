import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactForm } from './ContactForm/ContactForm';

import './App.css';

export const App = () => {
  return (
    <div>
      <Phonebook text="Phonebook" />

      <ContactForm />

      <SearchBox />

      <ContactList />
    </div>
  );
};
