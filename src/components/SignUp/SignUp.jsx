/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SignUp({ authentication }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [passwordIsValid, setPasswordIsValid] = useState(null);
  const [repeatPasswordIsValid, setRepeatPasswordIsValid] = useState(null);
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (email.length === 0) {
      setEmailIsValid(false);
      return;
    }
    if (password === "") {
      setPasswordIsValid(false);
      return;
    }
    if (repeatPasswordIsValid === "" || repeatPassword !== password) {
      setRepeatPasswordIsValid(false);
      return;
    }
    setEmailIsValid(true);
    setPasswordIsValid(true);
    setRepeatPasswordIsValid(true);

    navigate("app");
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(e.target.value.length);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleRepeatPassword(e) {
    setRepeatPassword(e.target.value);
  }
  return (
    <>
      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Sign Up</h2>
        <div className={styles.emailAddress}>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className={styles.formInput}
            value={email}
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
            value={password}
            onChange={handlePassword}
          />
          {passwordIsValid === false && (
            <p className={styles.validationParagraph}>Can`t be empty</p>
          )}
        </div>

        <div className={styles.repeatPassword}>
          <label htmlFor="repeat"></label>
          <input
            type="password"
            name="repeat"
            id="repeat"
            placeholder="Repeat Password"
            className={styles.formInput}
            value={repeatPassword}
            onChange={handleRepeatPassword}
          />
          {repeatPasswordIsValid === false && (
            <p className={styles.validationParagraph}>Can`t be empty</p>
          )}
        </div>
        <button
          className={styles.loginBtn}
          onClick={() =>
            dispatch({ type: "login", payload: { email, password } })
          }
        >
          Create an account
        </button>
        <div className={styles.actions}>
          <p>Already have an account??</p>
          <button onClick={() => authentication("login")}>Login</button>
        </div>
      </form>
      ;
    </>
  );
}

export default SignUp;
