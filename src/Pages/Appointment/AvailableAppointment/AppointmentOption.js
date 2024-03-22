import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card bg-base-100 shadow-xl hover:bg-slate-100">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : <span className='text-red-500'>Try Another Day</span>}</p>
                <p>{slots.length}{slots.length > 1 ? ' spaces' : ' space'}</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal"
                        className="btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary hover:border-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;