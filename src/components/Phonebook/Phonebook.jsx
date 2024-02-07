import css from './Phonebook.module.css';
export const Phonebook = ({ text }) => {
  return <h1 className={css.hItem}>{text}</h1>;
};
