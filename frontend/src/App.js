import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import StudentForm from "./registration/StudentForm";
import TeacherForm from "./registration/TeacherForm";

function App() {
  useEffect(() => {
    const printdata = async () => {
      await axios
        .post(`${process.env.REACT_APP_API}/api/auth/login`, {
          email: "latesadcst@gmail.com",
          password: "jaidan",
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    printdata();
  });

  return <div className="App"></div>;
}

export default App;
