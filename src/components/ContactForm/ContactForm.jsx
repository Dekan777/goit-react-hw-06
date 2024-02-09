import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contacsSlice';
import { getContact } from '../redux/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const contacts = useSelector(getContact);
  const dispatch = useDispatch();

  const handlePushForm = async (values, { resetForm }) => {
    const { name, number } = values;

    const contactExists = contacts.contacts.some(item => item.name === name);

    if (contactExists) {
      alert(`${name} is already in contact!`);
    } else {
      const newContact = { id: nanoid(10), name, number };
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s-]+$/, 'Must contain only letters')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username required for entry'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Number required for entry'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handlePushForm}
      validationSchema={validationSchema}
    >
      <Form className={css.classForm}>
        <ErrorMessage name="name" component="div" className={css.error} />

        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Username"
        />

        <ErrorMessage name="number" component="div" className={css.error} />

        <Field
          type="text"
          name="number"
          id={numberFieldId}
          placeholder="Number"
        />

        <p> </p>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
