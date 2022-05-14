import React from "react";
import "./login.css";
import { useRef } from "react";
import axios from "axios";

const Login = ({ user }) => {
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
      const logindata = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        data
      );
      console.log(logindata);
      // .then((res) => {
      //   console.log(res.data);
      //   user.setLoggedIn(res.data);
      //   console.log(user.loggedIn);
      // })
      // .catch((err) => console.log(err.body));
    };
    login();
  };

  return (
    <div className="login">
      <div className="textfields">
        <label for="email" style={{ color: "#fff" }}>
          <span style={{ color: "#fff" }}>Email</span>
          <br />
          <input
            name="email"
            className="input-login"
            type="text"
            ref={emailRef}
          />
        </label>
        <label for="password" style={{ color: "#fff" }}>
          <span style={{ color: "#fff" }}>Password</span>
          <br />
          <input
            name="password"
            className="input-login"
            type="password"
            ref={passRef}
          />
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
        Sign Up as{" "}
        <a href="/regstudent" style={{ color: "#fff" }}>
          User
        </a>{" "}
        or{" "}
        <a href="/regteacher" style={{ color: "#fff" }}>
          Teacher
        </a>
      </span>
    </div>
  );
};

export default Login;
