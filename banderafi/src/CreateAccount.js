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

        let userSignin = {};

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
                <label for="firstName">First Name</label>
                <input id="firstName" type="text"/>
                
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" />
                
                
                <label for="username">Username</label>
                <input id="username" name="username" type="text"/>
                
                <label for="password">Password</label>
                <input id="password" name="password" type="password" />
                
                <label for="confirmPassword">Re-Enter Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password"/>
                
                <div>
                    <button type="submit">Create Account</button>
                </div>
                {error && <h4 className="error">{error}</h4>}
            </form>
        </div>
    )
}

export default CreateAccount;