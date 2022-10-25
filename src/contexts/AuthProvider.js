import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [categories, setCategories] = useState('');

    const user = { name: 'Shakil Khan' }

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => (res.json()))
            .then(data => setCategories(data))
    }, [])






    const authSender = { user, categories }

    return (
        <AuthContext.Provider value={authSender}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;