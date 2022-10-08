import React from 'react';
import { Field, useFormikContext } from 'formik';
import './FormField.scss';

export default function FormField({ name, ...rest }) {
  const { errors, touched } = useFormikContext();
  return (
    <div className="form-field">
      <Field name={name} {...rest} />
      {errors[name] && touched[name] ? (
        <div className="error">{errors[name]}</div>
      ) : null}
    </div>
  );
}
