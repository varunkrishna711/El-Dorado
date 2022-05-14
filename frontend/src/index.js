import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Archives from "./components/Archives/Archives"
import StudentForm from "./components/registration/StudentForm";
import TeacherForm from "./components/registration/TeacherForm";
import Login from "./components/login/Login";
import Bookingpage from "./components/Booking_page/bookingpage";
import Competitions from "./components/Competitions";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);
