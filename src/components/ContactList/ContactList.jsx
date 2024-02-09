import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactList.module.css';
import { useId } from 'react';
// import { MdDelete } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { getContact, getFilter } from '../redux/selectors';
import { removeContact } from '../redux/contacsSlice';

export const ContactList = () => {
  const nameFieldId = useId();
  const contacts = useSelector(getContact);
  // const filter = useSelector(getFilter);
  // console.log(filter);
  const dispatch = useDispatch();
  // console.log(contacts);
  const handleRemoveContact = contactId => dispatch(removeContact(contactId));

  // const filteredContactList = filter
  //   ? contacts.filter(item =>
  //       item.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : contacts;

  return (
    <div>
      {contacts.contacts.map(({ name, number }, id) => (
        <div className={css.conteyner} key={id}>
          <p className={css.pIttem}>
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
            key={`delete-${id}`}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
