import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
const AvailableAppointment = ({ selectedDate }) => {
    const [availableAppointment, setAvailableAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAvailableAppointments(data));
    }, []);
    return (
        <section className='my-10'>
            <p className='text-secondary text-lg text-center font-semibold'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    availableAppointment.map(option =>
                        <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        >
                        </AppointmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                >
                </BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;