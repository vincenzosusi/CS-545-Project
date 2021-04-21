import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import './App.css';
import { AuthContext } from './Auth';
import axios from 'axios';

function CreateAccount() {
    const [user, setUser] = useContext(AuthContext);
    const [error, setError] = useState('');
    
    async function createNewUser () {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (!firstName || !lastName || !username || !password || !confirmPassword) {
            setError('Must fill in all fields')
            return false;
        }

        if (password !== confirmPassword) {
            setError('Passwords Do Not Match')
            return false;
        }
        
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        };

        let userSignin = {}

        try {
            userSignin = await axios.post('http://localhost:5000/create-account', newUser);
        } catch (e) {
            //console.log(e);
            setError('Username Already Exists');
            return false;
        }        
        setError('');
        setUser(userSignin);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewUser();
    }

    if (user) {
        return <Redirect to="/play" />;
    }

    return (
        <div className="create-account-page">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>First Name</p>
                    <input id="firstName" type="text" placeholder="First Name"/>
                </label>
                <label>
                    <p>Last Name</p>
                    <input id="lastName" type="text" placeholder="Last Name"/>
                </label>
                
                <label>
                    <p>Username</p>
                    <input id="username" type="text" placeholder="Username"/>
                </label>
                <label>
                    <p>Password</p>
                    <input id="password" type="password" placeholder="Password"/>
                </label>
                <label>
                    <p>Re-Enter Password</p>
                    <input id="confirmPassword" type="password" placeholder="Re-Enter Password"/>
                </label>
                
                <div>
                    <button type="submit">Login</button>
                </div>
                {error && <h4 className="error">{error}</h4>}
            </form>
        </div>
    )
}

export default CreateAccount;