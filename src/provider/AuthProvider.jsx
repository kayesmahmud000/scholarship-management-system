import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]= useState(true)
    const provider = new GoogleAuthProvider();
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn= (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile=(name, image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:image
        })
    }

    const googleLogin= ()=>{
        return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
     const unsubscribe=  onAuthStateChanged(auth, async currentUser=>{
            console.log('current user -->>' , currentUser?.email)
            if(currentUser?.email){
                setUser(currentUser)
                setLoading(false)
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
        signout,
        updateUserProfile,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;