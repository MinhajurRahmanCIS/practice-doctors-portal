import React from 'react';

const BookingModal = ({treatment}) => {
    const {name} = treatment;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <div className="modal-action mt-0">
                        <label htmlFor="booking-modal" className="btn btn-sm">X</label>
                    </div>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;