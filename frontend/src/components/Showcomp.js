import React from "react";
import './Showcomp.css'

const Showcomp = ({image,name,venue,date,prize}) => {

        <div className="seconddiv">
            <div className="div21">
                <a href=""><img src={image} className="artpic" /></a>
                <p className="para1">{name}</p>
                <p className="para2">Venue : {venue}<br />Date : {date}<br />Prize : {prize}  </p>
            </div>
            
        </div>
}

export default Showcomp;