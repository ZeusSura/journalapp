import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import {useDispatch, useSelector} from 'react-redux'
import { setErrorUI,removeError } from "../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";
export const RegisterScreen = () => {
  const dispach = useDispatch();

  const state = useSelector(state=>state.ui)
  const {msgError} =state;

  const [formValues, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const { name, email, password, confirm } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {

      dispach(startRegisterWithEmailPassword(email,password,name))
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispach(setErrorUI('Ingrese un nombre'))
        return false;
    } else if (!validator.isEmail(email)) {
        dispach(setErrorUI('Email invalido'))
        return false;
    } else if (password !== confirm || password.length < 5) {

      dispach(setErrorUI('Las contraseñas deben coincidir y almenos tener 5 caracteres'))
      return false;
    }
    dispach(removeError())
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleSubmit}>
        {msgError&&<div className="auth__alert-error">{msgError}</div>}
        
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="confirm"
          onChange={handleChange}
          className="auth__input"
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
