import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSingup = ({ submitForm }) => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>signup</h1>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="password2">Password2</label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="enter password2"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default FormSingup;
