import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const { user } = useContext(AuthContext);

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
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone
        };
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Booking Successfully")
                    refetch();
                    setTreatment(null);
                }
                else {
                    toast.error(data.message);
                }
            });


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="modal-action mt-0 justify-between">
                        <h3 className="font-bold text-xl">{treatmentName}</h3>
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
                        <input type="text" name='name' defaultValue={user.uid && user.displayName} className="input input-bordered w-full" disabled required />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" name='email' defaultValue={user.uid && user.email} className="input input-bordered w-full" disabled required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" required />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;