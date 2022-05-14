import React from "react";
import './Showcomp.css'

const Showcomp = ({image,name,venue,date,prize}) => {
    return (
        <div className="seconddiv">
            <div className="div21">
                <a href=""><img src={image} className="artpic" /></a>
                <div className="para1">
                <p>{name}</p>
                <p >Venue : {venue}</p>
                <p>Date : {date}</p>
                <p>Prize : {prize} </p>
                </div>
                </div>
        </div>
    )    
}

export default Showcomp;