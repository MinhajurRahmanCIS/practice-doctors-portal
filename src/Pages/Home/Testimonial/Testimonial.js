import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const reviewData = [
        {
            _id: 1,
            name: "Henry",
            address: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            name: "Angle",
            address: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "Aurora",
            address: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ];
    return (
        <section className='p-12'>
            <div className='flex justify-between gap-2'>
               <div className='flex-col'>
               <p className='text-lg text-primary'>Testimonial</p>
               <h1 className='text-3xl'>What Our Patients Says</h1>
               </div>
               <img className='size-1/6' src={quote} alt="" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-3'>
                {
                    reviewData.map(review => 
                    <TestimonialCard
                    key={review._id}
                    review={review}
                    >
                    </TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;