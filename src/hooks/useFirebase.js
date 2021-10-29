// Adding Necessary file 
import firebaseInitializetion from "../firebase/firebase-initialize";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import { useState } from "react";

// firebase initialize 
firebaseInitializetion();

// useFirebase Hooks 
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .then((error) => {
                setError(error.message)
            })
    }

    return {
        signInWithGoogle, user, error, logout
    }
};

export default useFirebase;