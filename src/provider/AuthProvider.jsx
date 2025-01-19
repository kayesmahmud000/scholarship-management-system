import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import auth from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]= useState(true)
    const provider = new GoogleAuthProvider();
    const axiosPublic= useAxiosPublic()
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
     const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
            // console.log('current user -->>' , currentUser?.email)
            if(currentUser && currentUser?.email){
                const userinfo= {email: currentUser?.email}
                setUser(currentUser)
               axiosPublic.post('/jwt', userinfo)
               .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token', res.data.token)
                }
               })
               
               
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
            
        })

        return ()=>{
           return unsubscribe()
        }
    },[axiosPublic])
    const authInfo={
        user,
        createUser,
        loading, 
        signIn,
        signout,
        setUser,
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