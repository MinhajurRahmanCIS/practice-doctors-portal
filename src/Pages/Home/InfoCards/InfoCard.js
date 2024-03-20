import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
    return (
        <div className={`card px-6 card-side shadow ${bgClass} text-white`} >
            <figure><img src={icon} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;