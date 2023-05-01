import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef();

    const { userLogIn, passwordReset, googleLoginIn } = useContext(AuthContext)

    const [show, setShow] = useState(false)
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleResetPassword = (event) => {
        const email = emailRef.current.value;
        if (!email) {
            alert("please provide email address")
            return
        }
        passwordReset(email)
            .then(result => {
                alert('please check your email')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGoogleLogin = () => {
        googleLoginIn()
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                setUser(loginUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <p onClick={() => { setShow(!show) }}>{
                                        show ? 'Hide password' : 'Show password'
                                    }</p>
                                </label>

                                <label className="label">
                                    <p>New User Please ? <Link className='link text-blue-600' to='/resister'>Resister</Link></p>
                                </label>
                            </div>
                            <div>
                                <p>Reset your password ? <span onClick={handleResetPassword} className='link text-red-300'>Reset</span></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="mb-10 text-center">
                            <button onClick={handleGoogleLogin} className="btn btn-primary w-80">Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;