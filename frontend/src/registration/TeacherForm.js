import "./form.css";
import { useState } from "react";
import axios from "axios";

function TeacherForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ ...inputs, isTeacher: true });
    const printdata = async () => {
      await axios
        .post(`${process.env.REACT_APP_API}/api/auth/register`, {
          ...inputs,
          isTeacher: true,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      printdata();
    };
  };

  return (
    <div className="component">
      <p className="heading">Teacher Registration</p>
      <form className="Body" onSubmit={handleSubmit}>
        <div className="fields">
          {/* {" "} */}
          Name{" "}
          <input
            className="inp"
            placeholder="Name"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          {/* </div> */}
          <br />
          <br />
          {/* <div> */} Password{" "}
          <input
            className="inp"
            placeholder="password"
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          {/* </div> */}
          <br />
          <br />
          {/* <div> */}
          Age{" "}
          <input
            className="inp"
            placeholder="Age"
            type="text"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
          {/* </div> */}
          <br />
          <br />
          {/* <div> */}
          Email{" "}
          <input
            className="inp"
            placeholder="Email"
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          {/* </div> */}
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
              others
            </label>
          </div>
          <br />
          <br />
          {/* <div> */}
          Phone Number{" "}
          <input
            className="inp"
            placeholder="Phone Number"
            type="text"
            name="phnumber"
            value={inputs.phnumber || ""}
            onChange={handleChange}
          />
          {/* </div> */}
          <br />
          <p className="title">Address</p>
          <textarea
            className="txtarea"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          />
          <br />
          <br />
          {/* <div> */}
          <p className="title">Name the art forms you could teach</p>{" "}
          {/** has to be added into an array */}
          <input
            className="inp"
            type="text"
            name="course"
            value={inputs.course || ""}
            onChange={handleChange}
          />
          <br />
          <p className="title">Write about your skill</p>
          <textarea
            className="txtarea"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
          <br />
          <br />
          <input className="subButton" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default TeacherForm;
