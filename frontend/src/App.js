// import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Arts from "./components/Arts";
import Profile from "./components/Profile Page/Profile";
import Competitions from "./components/Competitions";
import Bookingpage from "./components/Booking_page/Bookingpage";
import Login from "./components/login/Login";
import StudentForm from "./components/registration/StudentForm";
import TeacherForm from "./components/registration/TeacherForm";

// import { useEffect } from 'react';
// import {auth} from './firebase';
// import {useStateValue} from './StateProvider';

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  const login = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URI}/api/auth/login`, data)
      .then((res) => setLoggedIn(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header user={{ loggedIn, login }} /> <Arts /> <Footer />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/profile"
            element={
              <>
                <Header user={{ loggedIn, login }} />
                {loggedIn ? <Profile user={{ loggedIn }} /> : <Login />}
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/competitions"
            element={
              <>
                <Header user={{ loggedIn, login }} />{" "}
                <Competitions user={{ loggedIn, login }} /> <Footer />{" "}
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/book"
            element={
              <>
                <Header user={{ loggedIn, login }} />{" "}
                <Bookingpage user={{ loggedIn, login }} /> <Footer />{" "}
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Header user={{ loggedIn, login }} />{" "}
                <Login user={{ loggedIn, setLoggedIn, login }} />{" "}
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/regstudent"
            element={
              <>
                <Header user={{ loggedIn, login }} />{" "}
                <StudentForm user={{ loggedIn, login }} /> <Footer />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route
            path="/regteacher"
            element={
              <>
                <Header user={{ loggedIn, login }} />{" "}
                <TeacherForm user={{ loggedIn, login }} /> <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
