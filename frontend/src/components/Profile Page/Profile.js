import React from "react";
import { Navigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({ user }) => {
  return (
    <div className="body">
      <div className="body2">
        <div className="profilepic">
          <div className="profname1">
            <img
              className="pic"
              src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-12-512.png"
            />
            <h1 className="name">{user.loggedIn.username}</h1>
          </div>
          <p className="email">name123@gmail.com</p>
        </div>
      </div>
      <div className="body3">
        <div className="bookcourse">
          <div className="booking">
            <br />
            <h1 className="bookinghead">Your Bookings</h1>
            <br />
            <div className="event">
              <p className="artname"> Kathakali,Kottayam</p>
              <button className="cancel" href="/">
                cancel
              </button>
            </div>
          </div>
          <div className="booking">
            <br />
            <h1 className="bookinghead">Your Courses</h1>
            <br />
            <div className="event">
              <p className="artname"> Mohiniyattom,Thrissur</p>
              <button className="cancel" href="/">
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="outbut">
        <button className="logout">Log Out</button>
      </div>
    </div>
  );
};

export default Profile;
