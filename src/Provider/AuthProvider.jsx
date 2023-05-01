import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, name) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updatedUserInfo = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })

    }
    const logOut = () => {
        return signOut(auth)
    }
    const passwordReset = (email) => {
       return sendPasswordResetEmail(auth,email)
    }
    const googleProvider = new GoogleAuthProvider()
    const googleLoginIn = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        userLogIn,
        logOut,
        updatedUserInfo,
        passwordReset,
        googleLoginIn
    }
    // observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        // stop observing while unmounting
        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;