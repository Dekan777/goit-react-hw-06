import './App.css';

// import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
// import { InitialContacts } from './data/InitialContacts';
import { ContactForm } from './ContactForm/ContactForm';
// import { useSelector } from 'react-redux';
// import { getContact } from '../redux/selectors';

export const App = () => {
  // const contacts = useSelector(getContact);
  return (
    <div>
      <Phonebook text="Phonebook" />

      <ContactForm />

      <SearchBox />

      <ContactList />
    </div>
  );
};
