import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebse.confiq";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleAuthProvider);
    };

    useEffect(()=>{
        const unsubscrie = onAuthStateChanged(auth,currentUser =>{
             setUser(currentUser);
             setLoading(false)
        });
        return ()=>{
            return unsubscrie();
        }
    })

    const authInfo = {
         user,
         loading,
         createUser,
         signIn,
         logOut,
         loginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;