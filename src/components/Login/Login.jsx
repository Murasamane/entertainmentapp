/* eslint-disable react/prop-types */
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
function Login({ authentication }) {
  const [formData, setFormData] = useState({
    email: "johnDoe@mail.com",
    password: "pass1234!",
  });
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  function handleLogin(e) {
    e.preventDefault();

    if (formData.email.length === 0) {
      setEmailIsValid(false);
      return;
    }
    if (formData.password === "") {
      setPasswordIsValid(false);
      return;
    }

    setEmailIsValid(true);
    setPasswordIsValid(true);
    navigate("app");
  }

  function handleEmail(e) {
    setFormData((prevState) => ({ ...prevState, email: e.target.value }));
  }

  function handlePassword(e) {
    setFormData((prevState) => ({ ...prevState, password: e.target.value }));
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className={styles.emailAddress}>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className={styles.formInput}
            value={formData.email}
            onChange={handleEmail}
          />
          {emailIsValid === false && (
            <p className={styles.validationParagraph}>Can`t be empty</p>
          )}
        </div>
        <div className={styles.password}>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={styles.formInput}
            value={formData.password}
            onChange={handlePassword}
          />
          {passwordIsValid === false && (
            <p className={styles.validationParagraph}>Can`t be empty</p>
          )}
        </div>
        <button
          className={styles.loginBtn}
          onClick={() => dispatch({ type: "login", payload: formData })}
        >
          Login to your account
        </button>
        <div className={styles.actions}>
          <p>Don`t have an account?</p>
          <button onClick={() => authentication("signup")}>Sign Up</button>
        </div>
      </form>
      ;
    </>
  );
}

export default Login;
