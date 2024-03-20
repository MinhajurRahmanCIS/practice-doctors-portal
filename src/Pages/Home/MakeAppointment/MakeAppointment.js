import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='mt-40'>
            <div className="hero bg-[url('/src/assets/images/appointment.png')]">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <img src={doctor} className="-mt-28" alt='' />
                    <div className='p-4'>
                        <p className='text-lg text-secondary font-bold'>Appointment</p>
                        <div className='text-white'>
                            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;