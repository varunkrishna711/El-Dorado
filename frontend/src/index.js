
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Archives from "./Archives/Archives"
import StudentForm from "./registration/StudentForm";
import TeacherForm from "./registration/TeacherForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
