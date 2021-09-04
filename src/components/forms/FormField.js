import React, { useState } from "react";
import InputField from "./InputField";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, type, ...otherProps }) {
  const { setFieldTouched, handleChange, values, touched, errors } =
    useFormikContext();

  return (
    <>
      <InputField
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        value={values[name]}
        type={type}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormField;
