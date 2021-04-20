import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import './App.css';
import { AuthContext } from './Auth';

function CreateAccount() {
    const {user} = useContext(AuthContext);
    const [passwordMatch, setPasswordMatch] = useState('');
    
    const createNewUser = (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;  
        
        if (password !== confirmPassword) {
            setPasswordMatch('Passwords Do Not Match')
            return false;
        }

        // check if user exists. if not add them and log them in
    };

    if (user) {
        return <Redirect to="/play" />;
    }

    return (
        <div className="create-account-page">
            <h1>Create Account</h1>
            <form onSubmit={createNewUser}>
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
                {passwordMatch && <h4 className="error">{passwordMatch}</h4>}
            </form>
        </div>
    )
}

export default CreateAccount;