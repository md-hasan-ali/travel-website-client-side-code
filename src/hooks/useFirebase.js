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
    const [isLoading, setIsLoading] = useState(true)

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        return (
            setIsLoading(true),
            signInWithPopup(auth, GoogleProvider)
        )
    }

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
    }, [])

    return {
        signInWithGoogle, user, error, logout, isLoading, setIsLoading, setError
    }
};

export default useFirebase;