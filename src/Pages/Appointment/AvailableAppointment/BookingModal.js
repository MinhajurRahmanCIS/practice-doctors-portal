import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        };
        setTreatment(null);
        console.log(booking);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="modal-action mt-0 justify-between">
                        <h3 className="font-bold text-xl">{name}</h3>
                        <label htmlFor="booking-modal" className="btn btn-sm">X</label>
                    </div>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-5 mt-6'>
                        <input type="text" name='date' className="input input-bordered w-full" value={format(selectedDate, 'PP')} disabled />
                        <select name='slot' className="select select-bordered w-full ">

                            {
                                slots.map((slot, i) =>
                                    <option
                                        key={i}
                                        value={slot}
                                    >
                                        {slot}
                                    </option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full" required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" required />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;