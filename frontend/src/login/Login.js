import React from "react";
import "./login.css";
import { useRef } from "react";
import axios from "axios";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const checkRef = useRef();

  const handleClick = () => {
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
    console.log(checkRef.current.checked);
    const data = {
      email: emailRef.current.value,
      password: passRef.current.value,
      isTeacher: checkRef.current.checked,
    };
    console.log(data);
    const login = async () => {
      await axios
        .post(`${process.env.REACT_APP_URI}/api/auth/login`, data)
        .then((res) => res.status(200).json())
        .catch((err) => console.log(err));
    };
    login();
  };

  return (
    <div className="login">
      <div className="textfields">
        <label for="email">
          Email
          <br />
          <input name="email" type="text" ref={emailRef} />
        </label>
        <label for="password">
          Password
          <br />
          <input name="password" type="password" ref={passRef} />
        </label>
      </div>
      <div className="check">
        <input type="checkbox" class="checkbox" ref={checkRef} />
        Login as Teacher
      </div>

      <button type="submit" onClick={handleClick}>
        LogIn
      </button>
      <span className="note">
        Sign Up as <a href="">User</a> or <a href="">Teacher</a>
      </span>
    </div>
  );
};

export default Login;
