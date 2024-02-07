import './App.css';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactList } from './ContactList/ContactList';
import { SearchBox } from './SearchBox/SearchBox';
import { InitialContacts } from './data/InitialContacts';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const parsedData = JSON.parse(window.localStorage.getItem('saved-value'));
  const [contacts, setContacts] = useState(
    parsedData ? parsedData : InitialContacts
  );
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-value', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = evt => {
    setSearchValue(evt.target.value);
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name &&
      contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSubmit = (values, actions) => {
    const newObjectId = nanoid();
    const newContact = {
      Id: newObjectId,
      ...values,
    };

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isContactExists) {
      Notiflix.Notify.info(
        'A contact with such data already exists. Enter a different name'
      );
    } else {
      setContacts([...contacts, newContact]);
      actions.resetForm();
    }
  };

  const handleContactDelete = name => {
    const updatedContacts = contacts.filter(contact => contact.name !== name);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <Phonebook text="Phonebook" />

      <ContactForm handleSubmitForm={handleSubmit} />

      <SearchBox value={searchValue} change={handleSearchChange} />

      <ContactList value={filteredContacts} onDelete={handleContactDelete} />
    </div>
  );
};
