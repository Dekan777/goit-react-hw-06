import { useId, forwardRef } from 'react';
import { IMaskInput } from 'react-imask';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
const NumberMask = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000-00-00"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s-]+$/, 'Must contain only letters, spaces, and hyphens')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Username required for entry'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Number required for entry'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ handleSubmitForm }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.classForm}>
        {/* <label htmlFor={nameFieldId}>Username</label> */}
        <ErrorMessage name="name" component="div" className={css.error} />
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          placeholder="Username"
        />
        {/* <label htmlFor={numberFieldId}>Number</label> */}
        <ErrorMessage name="number" component="div" className={css.error} />

        <Field
          type="text"
          name="number"
          id={numberFieldId}
          as={NumberMask}
          placeholder="Number"
        />
        <p>Format: 123-45-67</p>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
