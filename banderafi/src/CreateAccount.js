import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import './App.css';
import { AuthContext } from './Auth';
import Users from './data/users.json';

function CreateAccount() {
    const {user} = useContext(AuthContext);
    const [error, setError] = useState('');
    
    const createNewUser = (e) => {
        e.preventDefault();
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
        
        for (let existingUser of Users) {
            alert(`${Users.length}`);
            //alert(`${existingUser.username}`);
            if (existingUser.username === username) {
                setError('Username already exists');
                return false;
            }
        }

        const newUsers = Users;
        newUsers.push({
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "password": password});
        /*
        alert(`Existing Users: ${newUsers.map(user => (
            <p>{user.username}</p>
        ))}`);*/

        alert({newUsers});
        // check if user exists. if not add them and log them in
    };

    if (user) {
        return <Redirect to="/play" />;
    }

    return (
        <div className="create-account-page">
            <h1>Create Account</h1>
            <form onSubmit={createNewUser}>
                <label for="firstName">First Name</label>
                <input id="firstName" type="text"/>
                
                <label for="lastName">Last Name</label>
                <input id="lastName" type="text" />
                
                
                <label for="username">Username</label>
                <input class="username" name="username" type="text"/>
                
                <label for="password">Password</label>
                <input class="password" name="password" type="password" />
                
                <label for="confirmPassword">Re-Enter Password</label>
                <input id="confirmPassword" name="confirmPassword" type="password"/>
                
                <div>
                    <button type="submit">Login</button>
                </div>
                {error && <h4 className="error">{error}</h4>}
            </form>
        </div>
    )
}

export default CreateAccount;