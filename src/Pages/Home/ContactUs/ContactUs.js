import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <div className="hero bg-[url('/src/assets/images/appointment.png')]">
            <div className="hero-content flex-col">
                <form className="card-body gap-3">
                    <div className='text-center'>
                        <p className='text-secondary text-lg font-bold'>Contact Us</p>
                        <h1 className='text-white text-3xl'>Stay connected with us</h1>
                    </div>
                    <div className="form-control mt-3">
                        <input type="email" placeholder="Email Address" className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg" ></textarea>
                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;