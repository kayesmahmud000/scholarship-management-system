import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]= useState(true)

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn= (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
     const unsubscribe=  onAuthStateChanged(auth, async currentUser=>{
            console.log('current user -->>' , currentUser.email)
            if(currentUser?.email){
                setUser(currentUser)
            }

        })

        return ()=>{
           return unsubscribe()
        }
    },[])
    const authInfo={
        user,
        createUser,
        loading, 
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;