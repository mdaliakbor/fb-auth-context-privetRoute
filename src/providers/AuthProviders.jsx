import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';




export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // register with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    /// login with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // observer auth state change
    useEffect(() => {
        const unsubscrive = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state change', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscrive()
        }
    }, [])

    // log Out 
    const logOut = () => {
        return signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
        }).catch((error) => {
            console.log(error)
        });
    }

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;