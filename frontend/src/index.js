import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Archives from "./Archives/Archives";
import StudentForm from "./registration/StudentForm";
import TeacherForm from "./registration/TeacherForm";
import Login from "./login/Login";
// import Competitions from "./components/Competitions";
import Card from "./Booking_page/Components/Card/card";
import Bookingpage from "./Booking_page/Bookingpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Bookingpage />
  </React.StrictMode>
);
