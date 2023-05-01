import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';

const Resister = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const { createUser, updatedUserInfo } = useContext(AuthContext)
    // console.log(createUser)

    const handleResister = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirm_password.value;
        console.log(name, email, password, confirmPassword)

        if (password !== confirmPassword) {
            setError('password and confirm password not match')
            return;
        }
        else if (password.length < 8) {
            setError('your password must be 8+ character')
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        createUser(email, password,name)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                sendEmailVerification(loggedUser)
                .then(result=>{
                    console.log(result)
                    alert('please verify your email')
                })
                console.log(loggedUser)
                updatedUserInfo(loggedUser, name)
                .then(()=>{})
                .catch(error=>console.log(error))
                setSuccess('Successfully Resisted')
                form.reset()
            })
            .catch(error => {
                console.error(error.message)
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-10">Resister now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full md:w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleResister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='confirm_password' placeholder="confirm password" className="input input-bordered" />
                                <p className='text-blue-500 text-center'><small>( Password must be 8+ character, 1 uppercase letter & 1 number )</small></p>
                                <label className="label">
                                    <p onClick={() => { setShow(!show) }}>{
                                        show ? 'Hide password' : 'Show password'
                                    }</p>
                                </label>
                                <label className="label">
                                    <p>Already Resister ? <Link className='link text-blue-600' to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div>
                                <p className='text-red-600'>{error}</p>
                                <p className='text-green-500 font-semibold'>{success}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Resister</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resister;