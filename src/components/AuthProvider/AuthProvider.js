// Adding necessary file 
import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

// Create Context Api
export const AuthContext = createContext()
const AuthProvider = (props) => {
    const { children } = props;
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;