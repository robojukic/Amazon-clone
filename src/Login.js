import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { PasswordTwoTone } from "@mui/icons-material";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stops the refresh
    //do login logic
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //logged in, redirect to homepage
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); //this stops the refresh
    //do register logic
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //creeated a user and logged in,redirect to homepage
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://camo.githubusercontent.com/e74e5d2a7b17872ddf1147fe8bbf56d686cc18e909dbba00a7b81f5c7d6174a6/68747470733a2f2f6576657273686f702e696f2f696d672f6c6f676f2e706e67"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="login-signInButton" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login-registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
