import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StudentForm from "./registration/StudentForm";
import TeacherForm from "./registration/TeacherForm";
import Login from "./login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <TeacherForm />
  </React.StrictMode>
);
