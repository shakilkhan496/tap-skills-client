import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
export const auth = getAuth(app)


const AuthProvider = ({ children }) => {


    const [categories, setCategories] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();
    // -----------------------------------------------------------
    useEffect(() => {
        fetch('https://assignment-11-server-five.vercel.app/courses')
            .then(res => (res.json()))
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return unsubscribe();
    }, [])

    // -----------Sign in sign up and signOut section------------------------------------------------------
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    }
    const gitHubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubAuthProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const emailAndPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe();
        };

    }, [])




    const authSender = { user, categories, googleSignIn, createUser, gitHubSignIn, emailAndPasswordSignIn, loading, setLoading, logOut }

    return (
        <AuthContext.Provider value={authSender}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;