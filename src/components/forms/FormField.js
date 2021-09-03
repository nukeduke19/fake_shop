import React from "react";
import InputField from "./InputField";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, type, ...otherProps }) {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
  return (
    <>
      <InputField
        onBlur={() => setFieldTouched(name)}
        // value={values[name]}
        // onChange={(text) => setFieldValue(name, text)}
        onChange={handleChange(name)}
        type={type}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormField;
