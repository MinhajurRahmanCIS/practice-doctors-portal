import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Open 09:00 AM to 05:00 PM Everyday",
            icon: clock ,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            name: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            icon: marker ,
            bgClass: "bg-accent"
        },
        {
            id: 3,
            name: "Contact us now",
            description: "+000 123 456789",
            icon: phone ,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
    ];
    console.log(cardData)
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5'>
            {
                cardData.map(card =>
                    <InfoCard
                        key={card.id}
                        card={card}
                    >
                    </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;