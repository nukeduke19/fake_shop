import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import TextArea from "./TextArea";

function FormTextArea({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, values, touched, errors } =
    useFormikContext();
  return (
    <>
      <TextArea
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default FormTextArea;
