import React from "react";
import './Showcomp.css'

const Showcomp = ({ image, name, venue, date, prize }) => {
    return(
        <div className="seconddiv">
            <div className="div21">
            <a href='/registration'><img src={image} className="artpic" /></a>
                <p className="para1"><a href="/" className="para1link"><span>{name}</span><br/>
               Venue : {venue}<br />Date : {date}<br />Prize : {prize}</a> </p>
            </div>

        </div>
    );
    
}

export default Showcomp; 