/* eslint-disable no-unused-vars */
import { useState } from "react";
import Login from "../../components/Login/Login";
import styles from "./LoginPage.module.css";
import SignUp from "../../components/SignUp/SignUp";

function LoginPage() {
  const [authState, setAuthState] = useState("login");
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="./assets/logo.svg" alt="logo" />
      </header>
      {authState === "login" ? (
        <Login authentication={setAuthState} />
      ) : (
        <SignUp authentication={setAuthState} />
      )}
    </div>
  );
}

export default LoginPage;
