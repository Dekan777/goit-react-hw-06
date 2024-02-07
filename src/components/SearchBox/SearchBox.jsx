import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ value, change }) => {
  const id = useId();

  return (
    <div>
      <p className={css.pItem}>Find contacts by name</p>
      <input className={css.input} type="text" id={id} value={value} onChange={change} />
    </div>
  );
};
