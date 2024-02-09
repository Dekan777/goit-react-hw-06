import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, getFilter } from '../redux/selectors';
import { removeContact } from '../redux/contacsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  const filteredContactList = filter
    ? contacts.contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts.contacts;

  return (
    <div>
      {filteredContactList.map(({ name, number, id }) => (
        <div className={css.container} key={`${name}-${number}`}>
          <p className={css.pItem}>
            <BsFillPersonFill className={css.myIcon} size="20" />
            {name}
          </p>
          <p className={css.par}>
            <BsFillTelephoneFill className={css.myIcon} size="16" />
            {number}
          </p>

          <button
            className={css.button}
            onClick={() => handleRemoveContact(id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
