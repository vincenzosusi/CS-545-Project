import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import './App.css';
import { AuthContext } from './Auth';

function Login() {
    const {user} = useContext(AuthContext);
    const [ loginError, setLoginError ] = useState('');    
    const loginUser = (e) => {
        e.preventDefault();
        
        // attemp to login
        // check if user exists and confirm login info
    }

    if (user) {
        return <Redirect to="/play" />;
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <label>
                    <p>Username</p>
                    <input id="username" type="text" placeholder="Username"/>
                </label>
                <label>
                    <p>Password</p>
                    <input id="password" type="password" placeholder="Password"/>
                </label>
                {loginError && <h4 className="error">{loginError}</h4>}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;