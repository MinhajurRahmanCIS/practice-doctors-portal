import React from 'react';

const TestimonialCard = ({ review }) => {
    const { name, description, address, img } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex items-center gap-3 mt-3'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h1>{name}</h1>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default TestimonialCard;