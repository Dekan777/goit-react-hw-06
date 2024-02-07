import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactList.module.css';
import { useId } from 'react';
import { MdDelete } from 'react-icons/md';

export const ContactList = ({ value, onDelete }) => {
  const nameFieldId = useId();

  const handleDeleteClick = name => {
    // console.log('id:', name);
    onDelete(name);
  };

  return (
    <div>
      {value.map(({ name, number }, id) => (
        <div className={css.conteyner} key={id}>
          <p className={css.pIttem}>
            <BsFillPersonFill className={css.myIcon} size="20" />
            {name}
          </p>
          <p className={css.par}>
            <BsFillTelephoneFill className={css.myIcon} size="16" />
            {number}
          </p>

          <button className={css.button} onClick={() => handleDeleteClick(name)} id={nameFieldId}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
