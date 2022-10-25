import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const user = { name: 'Shakil Khan' }



    const authSender = { user }

    return (
        <AuthContext.Provider value={authSender}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;