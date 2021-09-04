import React from "react";
import Form from "./forms/Form";
import * as Yup from "yup";
import SubmitButton from "./forms/SubmitButton";
import FormField from "./forms/FormField";
import FormTextArea from "./forms/FormTextArea";
import "../css/feedback.css";

function Feedback(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    email: Yup.string().required().email().label("Email"),
    subject: Yup.string().required().min(1).label("Subject"),
    message: Yup.string().label("Message"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("values", values);

    alert("Thanks for your feedback");
    resetForm();
  };

  return (
    <div className="feedback">
      <div className="feedback__container">
        <p className="feedback__heading">Feedback</p>
        <Form
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField name="name" type="input" placeholder="Name" />
          <FormField name="email" type="email" placeholder="Email" />
          <FormField name="subject" type="input" placeholder="Subject" />
          <FormTextArea name="message" placeholder="Message" />
          <SubmitButton title="Send" />
        </Form>
      </div>
    </div>
  );
}

export default Feedback;
