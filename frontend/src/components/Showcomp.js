import React from "react";
import './Showcomp.css'

const Showcomp = ({ image, name, venue, date, prize }) => {
    return(
        <div className="seconddiv">
            <div className="div21">
                <img src={image} className="artpic" />
                <p className="para1"><a href="/" className="para1link"><span>{name}</span><br/>
               Venue : {venue}<br />Date : {date}<br />Prize : {prize}</a> </p>
            </div>

        </div>
    );
    
}

export default Showcomp; 