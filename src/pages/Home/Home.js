import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            this is git checking home
        </div>
    );
};

export default Home;