import Card from './Components/Card/card.js';
import axios from 'axios';
import { useState } from 'react';

import TextField from "@mui/material/TextField";
import "./bookingpage.css";

function bookingpage() {
  
  // const razorPayPaymentHandler= async () =>  {
  //   const API_URL = process.env.REACT_APP_API;
  //   const orderUrl = `${API_URL}/api/razorpay/book`;
  //   const response = await axios.get(orderUrl);
  //   const { data } = response;
  //   console.log("App -> razorPayPaymentHandler -> data", data)
    
  //   const options = {
  //     key: '',
  //     name: "avdojo",
  //     description: "avodojo",
  //     order_id: data.id,
  //     handler: async (response) => {
  //       try {
  //        const paymentId = response.razorpay_payment_id;
  //        const url = `${API_URL}/api/razorpay/capture/${paymentId}`;
  //        const captureResponse = await axios.post(url, {})
  //        const successObj = JSON.parse(captureResponse.data)
  //        const captured = successObj.captured;
  //        console.log("App -> razorPayPaymentHandler -> captured", successObj)
  //        if(captured){
  //            console.log('success')
  //        }
         
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //     theme: {
  //       color: "#686CFD",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // }
  // razorPayPaymentHandler();

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
              image="https://imgs.search.brave.com/Ta2Rw2f_G3qhBIg0YJ2YEkmzji7qnwMOB_5OhuGQU6k/rs:fit:736:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/YlU3a2JhaFhPYUl6/dlRkRjFlZ2VRSGFF/eCZwaWQ9QXBp"
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image="https://imgs.search.brave.com/Ta2Rw2f_G3qhBIg0YJ2YEkmzji7qnwMOB_5OhuGQU6k/rs:fit:736:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/YlU3a2JhaFhPYUl6/dlRkRjFlZ2VRSGFF/eCZwaWQ9QXBp"
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image="https://imgs.search.brave.com/Ta2Rw2f_G3qhBIg0YJ2YEkmzji7qnwMOB_5OhuGQU6k/rs:fit:736:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/YlU3a2JhaFhPYUl6/dlRkRjFlZ2VRSGFF/eCZwaWQ9QXBp"
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image="https://imgs.search.brave.com/Ta2Rw2f_G3qhBIg0YJ2YEkmzji7qnwMOB_5OhuGQU6k/rs:fit:736:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/YlU3a2JhaFhPYUl6/dlRkRjFlZ2VRSGFF/eCZwaWQ9QXBp"
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image="https://imgs.search.brave.com/Ta2Rw2f_G3qhBIg0YJ2YEkmzji7qnwMOB_5OhuGQU6k/rs:fit:736:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/YlU3a2JhaFhPYUl6/dlRkRjFlZ2VRSGFF/eCZwaWQ9QXBp"
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
          <div className='card-body'>
            <Card 
              art_form="Kathakali"
              image="https://imgs.search.brave.com/Ta2Rw2f_G3qhBIg0YJ2YEkmzji7qnwMOB_5OhuGQU6k/rs:fit:736:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/YlU3a2JhaFhPYUl6/dlRkRjFlZ2VRSGFF/eCZwaWQ9QXBp"
              place="Kottayam, Kerala"
              amount="Rs. 1000"
            />
          </div>
        </div>
    </div>
  );
}

export default bookingpage;
