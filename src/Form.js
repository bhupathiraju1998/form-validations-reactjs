import React from "react";
import { useState } from "react";
import FormSignup from "./FormSingup";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>{!isSubmitted ? <FormSignup submitForm={submitForm} /> : <p>gopal</p>}</>
  );
};

export default Form;
