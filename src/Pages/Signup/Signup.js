import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleSingUpLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate("/");
        // toast.success("User Create Successfully");
    }

    const handelSignup = (data, event) => {
        setSignUpError("");
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name
                };
                updateUser(userInfo)
                    .then(() => {
                        event.target.reset();
                        console.log(user);
                        saveUser(data.name, data.email);
                    })
                    .catch(error => console.log(error.message));

            })
            .catch(error => {
                console.log(error.message);
                setSignUpError(error.message);
            });
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    };

    const handelGoogleLogin = () => {
        googleSingUpLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email);
            })
            .catch(error => {
                console.log(error.message);
                setSignUpError(error.message);
            });
    };

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-md rounded-xl'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handelSignup)}>
                    <label className="form-control w-full">
                        <div className="label"> <span className="label-text">Name</span></div>
                        <input type="text"
                            {
                            ...register("name", {
                                required: "Name is Required"
                            })
                            }
                            className="input input-bordered w-full" />
                        <div className="label">
                            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                        </div>
                    </label>

                    <label className="form-control w-full">
                        <div className="label"> <span className="label-text">Email</span></div>
                        <input type="email"
                            {
                            ...register("email", {
                                required: "Email is Required"
                            })
                            }
                            className="input input-bordered w-full" />
                        <div className="label">
                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                        </div>
                    </label>

                    <label className="form-control w-full">
                        <div className="label"> <span className="label-text">Password</span></div>
                        <input type="password"
                            {
                            ...register("password", {
                                required: "Password is Required",
                                minLength: { value: 6, message: "Password Must be 6 character long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Must be strong" }
                            })
                            }
                            className="input input-bordered w-full" />
                        <div className="label">
                            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        </div>
                        <div className="label">
                            <span className="label-text-alt">Forgot Password ?</span>
                        </div>
                    </label>
                    <input className='btn btn-accent w-full my-3' type="submit" value="login" />
                    <p className="text-xs text-center">Already have an Account! <Link to="/login" className='text-secondary font-semibold hover:text-primary'>Please Login</Link></p>
                    <div className="mt-1 text-center">
                        {signUpError && <p className="text-red-600" >{signUpError}</p>}
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handelGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;