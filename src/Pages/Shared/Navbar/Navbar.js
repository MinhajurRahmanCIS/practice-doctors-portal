import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error.message));
    };
    const menu =
        <>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/aboutUs">About Us</Link></li> */}
            {
                user?.uid ?
                    <>
                        <li><Link to="/appointment">Appointment</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><button className='btn btn-sm btn-error ' onClick={handelLogout}>Logout</button></li>
                    </>

                    :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
            }

        </>
        ;
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">Doctors Portal</Link>
            </div>
            {user?.uid &&
                <div className='navbar-end md:hidden '>
                    <div className="avatar">
                        <div className="me-3 w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL ? user.photoURL : "https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"} alt="" />
                        </div>
                    </div>
                </div>

            }
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-0.5">
                    {menu}
                    {user?.uid &&
                        <div className="avatar">
                            <div className="ms-3 w-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL ? user.photoURL : "https://static.vecteezy.com/system/resources/previews/018/742/015/original/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"} alt="" />
                            </div>
                        </div>
                    }
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={2} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;