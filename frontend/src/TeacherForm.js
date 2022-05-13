import './TeacherForm.css';
import { useState } from 'react';

function TeacherForm() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
      }

    return (
        <div className="component">
            <p className='heading'>Teacher Registration</p>
        <form className="Body"  onSubmit={handleSubmit}>
               <div > <input
               className='inp'
                    placeholder='Name'
                    type="text"
                    name="name"
                    value={inputs.name||""}
                    onChange={handleChange}
                /></div><br/><br/>
                <div>
                 <input
                 className='inp'
                    placeholder='Age'
                    type="text"
                    name="age"
                    value={inputs.age||""}
                    onChange={handleChange}
                /></div><br/><br/>
                <div className='gender'>
                <label>
                    Gender: 
                    <input
                    type="radio"
                    name="gender"
                    value={inputs.gender||""}
                    onChange={handleChange}
                />Male 
                    <input
                    type="radio"
                    name="gender"
                    value={inputs.gender||""}
                    onChange={handleChange}
                />Female
                </label></div><br/><br/>
                <div>
                 <input
                 className='inp'
                    placeholder='Phone Number'
                    type="text"
                    name="number"
                    value={inputs.number||""}
                    onChange={handleChange}
                /></div><br/>
                <p className='title'>Address</p>
                <textarea  className='txtarea' name='description' value={inputs.description||""}  onChange={handleChange}/>
                <br/><br/>
                <div>
                    <p className='title'>Name the art form you could teach</p>
                <input
                    className='inp'
                    type="text"
                    name="artname"
                    value={inputs.name||""}
                    onChange={handleChange}
                /></div><br/>
                <p className='title'>Write about your skill</p>
                <textarea  className='txtarea' name='description' value={inputs.description||""}  onChange={handleChange}/>
                <br/><br/>
                <input className='subButton' type="submit" value="Submit" />
                
        </form>
        </div>
    );
}

export default TeacherForm;