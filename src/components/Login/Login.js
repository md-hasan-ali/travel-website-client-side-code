// Adding Necessary file 
import React from 'react';
import useAuth from '../../hooks/useAuth';
import './login.css'

// Login component 
const Login = () => {
    const { signInWithGoogle, error } = useAuth();
    return (
        <div className='login-system'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="login">
                            <div className="login-icon">
                                <i className="fas fa-plane-departure"></i>
                            </div>
                            <h2>Please Login</h2>
                            <button className='btn btn-success' onClick={signInWithGoogle}><i className="fab fa-google"></i> Google Signin</button>
                        </div>
                        <h4 className='text-white pt-3'>{error}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;