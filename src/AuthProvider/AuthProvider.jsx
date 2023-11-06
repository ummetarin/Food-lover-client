
import { createContext, useEffect, useState } from "react";


import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";

export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
  
    const createUser=(email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }
  
     const googlesignin=()=>{
      setLoading(true);
        return signInWithPopup(auth,googleProvider);
     }
  
   const Signin=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
   }
  
   const LogOut=()=>{
    setLoading(true);
     return signOut(auth);
   }
  
    useEffect(()=>{
   const unsub=onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser);
          console.log(currentUser);
          setLoading(false)
          
      });
      return ()=>{
          return unsub();
      }
    },[])
  
     const authInfo={
     user,
     loading,
     createUser,
     googlesignin,
     Signin,
     LogOut,
  
     }
  

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;