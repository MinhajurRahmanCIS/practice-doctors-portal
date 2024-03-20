import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ];
    return (
        <div>
            <div className='text-center mt-10'>
                <p className='text-primary font-bold'>OUR SERVICES</p>
                <h1 className='text-5xl'>Services We Provide</h1>
            </div>
            <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    serviceData.map(service =>
                        <Service
                        key={service.id}
                        service={service}
                        >
                        </Service>)
                }
            </div>
        </div>
    );
};

export default Services;