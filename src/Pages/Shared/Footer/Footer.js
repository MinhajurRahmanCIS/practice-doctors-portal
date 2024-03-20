import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="bg-[url('/src/assets/images/footer.png')] bg-cover bg-center ">
            <footer className="footer justify-around py-20">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">ORAL HEALTH</h6>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link> 
                </nav>
                <nav>
                    <h6 className="footer-title">OUR ADDRESS</h6>
                    <p className="link link-hover">New York - 101010 Hudson</p>
                </nav>
            </footer>
            <div className="text-center p-5">
            Copyright 2022 All Rights Reserved
            </div>
        </section>
    );
};

export default Footer;