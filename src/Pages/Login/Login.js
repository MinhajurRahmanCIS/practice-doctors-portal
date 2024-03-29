import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { singIn, googleSingUpLogin } = useContext(AuthContext);
    const [logInError, setLogInError] = useState("");
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const handelLogin = (data, event) => {
        setLogInError('');
        singIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                event.target.reset();
                setLoginUserEmail(data.email);
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
                setLogInError(error.message);
            });
    };

    const handelGoogleLogin = () => {
        googleSingUpLogin()
            .then(result => {
                const loggedUser = result.user;
                setLoginUserEmail(loggedUser.email);
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
                logInError(error.message);
            });
    };

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-md rounded-xl'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <label className="form-control w-full">
                        <div className="label"> <span className="label-text">Email</span></div>
                        <input type="email"
                            {...register("email", {
                                required: "Email is Required"
                            })}
                            className="input input-bordered w-full" />
                        <div className="label">
                            {errors.email && <p className="text-red-600" role="alert">{errors.email.message}</p>}
                        </div>
                    </label>
                    <label className="form-control w-full">
                        <div className="label"> <span className="label-text">Password</span></div>
                        <input type="password"
                            {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 6, message: "password must be 6 character" }
                            })}
                            className="input input-bordered w-full" />
                        <div className="label">
                            {errors.password && <p className="text-red-600" role="alert">{errors.password.message}</p>}
                        </div>
                        <div className="label">
                            <span className="label-text-alt">Forgot Password ?</span>
                        </div>
                    </label>
                    <input className='btn btn-accent w-full my-3' type="submit" value="login" />
                    <p className="text-xs text-center">New to Doctors Portal? <Link to="/signup" className='text-secondary font-semibold hover:text-primary'>Create new account</Link></p>
                    <div className="mt-1 text-center">
                        {logInError && <p className="text-red-600" >{logInError}</p>}
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handelGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;