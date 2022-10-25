import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/logo/google-svgrepo-com.svg';
import git from '../../assets/logo/github-svgrepo-com.svg'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login here</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div>
                            <p>New to our website? <Link to='/signup' className='text-blue-700 link-hover'>Register Now!!</Link> .</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <hr />
                        <p className='text-center'>Or</p>
                        <div>
                            <button className='btn btn-primary ml-4 btn-outline'>Sign in with Google <img className='w-9 ml-3' src={google} alt='google' /> </button>
                        </div>
                        <div>
                            <button className='btn ml-5 mt-3 btn-outline'>Sign in with GitHub <img className='w-9 ml-3' src={git} alt='google' /> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;