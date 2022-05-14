import React from "react";
import "./ShowCards.css";

const ShowCards = ({name,image,url}) => {
    return (
        <>
            <div className="show-card">
                <h2 className="show-name">{name}</h2>

                <div className="show-card-image">
                 <a href={url}><img className="show-image" src={image} alt="show-image"  /></a>
                </div>
            </div>
        </>
    );

}

export default ShowCards;