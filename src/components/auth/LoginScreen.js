import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {useDispatch} from 'react-redux'
import { login } from "../../actions/auth";
export const LoginScreen = () => {

    const dispach =useDispatch()
  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispach(login(123,'omar'))
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        <input
          value={email}
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />

        <input
          value={password}
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};