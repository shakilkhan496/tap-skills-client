import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='title' src="https://images.unsplash.com/photo-1611348586789-33dbd65e1e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="max-w-sm w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to TAP <span className='text-amber-500'>SKILLS</span>!</h1>
                    <p className="py-6">Learn every skills with your best practice. Don't lose your hope . Always remember that <br />
                        Success is never achieved without hard work . So guys let's focus your work and be active.</p>
                    <p className='mt-3 mb-3'>"Work like a hell - Bill Gates"</p>
                    <button className="btn bg-amber-500 rounded-full text-2xl  lg:w-60 lg:h-20">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;