import React from "react";
import "./ShowCards.css";

const ShowCards = ({name,image}) => {
    return (
        <>
            <div className="show-card">
                <h2 className="show-name">{name}</h2>

                <div className="show-card-image">
                    <img className="show-image" src={image} alt="show-image" />
                </div>
            </div>
        </>
    );

}

export default ShowCards;