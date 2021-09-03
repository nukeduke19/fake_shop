import { useFormik, useFormikContext } from "formik";
import React from "react";
import Button from "./../Button";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onClick={handleSubmit} />;
}

export default SubmitButton;
