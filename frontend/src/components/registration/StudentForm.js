import "./form.css";
import { useState } from "react";
import axios from "axios";

function StudentForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log({
      ...inputs,
      isTeacher: false,
    });
    event.preventDefault();
    const printdata = async () => {
      await axios
        .post(`${process.env.REACT_APP_API}/api/auth/register`, {
          ...inputs,
          isTeacher: false,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    printdata();
  };

  return (
    <div className="component">
      <p className="heading">Student Registration</p>
      <form className="Body" onSubmit={handleSubmit}>
        <div>
          {" "}
          <input
            className="inp"
            placeholder="Name"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <br />
        <div>
          <input
            className="inp"
            placeholder="Email"
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <br />
        <div>
          <input
            className="inp"
            placeholder="Password"
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <br />
        <div className="gender">
          <label for="name">
            Gender:
            <input
              type="radio"
              name="gender"
              value={inputs.gender || ""}
              onChange={handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value={inputs.gender || ""}
              onChange={handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              value={inputs.gender || ""}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        <br />
        <br />

        <br />
        <div>
          <input
            className="inp"
            placeholder="Phone Number"
            type="text"
            name="phnumber"
            value={inputs.phnumber || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        {/* <p className="title">Address</p>
        <textarea
          className="txtarea"
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
        /> */}
        <br />
        <br />
        <br />
        <div>
          {/* <p className="title">Name the art form you want to learn</p>
          <input
            className="inp"
            type="text"
            name="artname"
            value={inputs.name || ""}
            onChange={handleChange}
          /> */}
        </div>
        <br />
        <br />
        <input className="subButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default StudentForm;
