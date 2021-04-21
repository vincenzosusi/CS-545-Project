import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import './App.css';
import { AuthContext } from './Auth';
import axios from 'axios';

function Login() {
    const [user, setUser] = useContext(AuthContext);
    const [ error, setError ] = useState('');    
    
    async function loginUser() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            setError('Must fill in all fields');
            return false;
        }

        const loginAttempt = {
            username: username,
            password: password
        };

        let userSignin = {}

        try {
            userSignin = await axios.post('http://localhost:5000/login', loginAttempt);
        } catch (e) {
            //console.log(e);
            //console.log(userSignin);
            setError('Username Or Password Incorrect');
            return false;
        }

        setError('');
        setUser(userSignin);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser();
    }

    if (user) {
        return <Redirect to="/play" />;
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username</label>
                <input id="username" type="text" />
                
                <label for="password">Password</label>
                <input id="password" type="password"/>
                
                {error && <h4 className="error">{error}</h4>}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;