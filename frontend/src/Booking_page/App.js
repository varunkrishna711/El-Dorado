import './App.css';
import Card from './Components/Card/card.js';
import image from './Kathakali.jpg';
import { useState } from 'react';

import TextField from "@mui/material/TextField";
import "./App.css";

function App() {
  //const [loc,setLoc] = useState(["Thiruvananthapuram","Kollam","Pathanamthitta","Kottayam","Alappuzha","Ernakulam","Thrissur","Palakkad","Kozhikode","Kannur","Kasargod"]);
  // const defaultOption;
  return (
      <div className="Book">
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search the ArtForm....."
          />
        </div>
        <label className="location">Location:  </label>

          <select className='loc'>
            <option value="nil">NIL</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Thrissur">Thrissur</option>
          </select> 
        <div className='shows'>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image={image}
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image={image}
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image={image}
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image={image}
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image={image}
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image={image}
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
        </div>
    </div>
  )  ;
}
export default App;
