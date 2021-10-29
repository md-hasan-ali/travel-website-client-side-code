// Adding Necessary file 
import firebaseInitializetion from "../firebase/firebase-initialize";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

// firebase initialize 
firebaseInitializetion();

// useFirebase Hooks 
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    return {
        signInWithGoogle, user, error, logout
    }
};

export default useFirebase;