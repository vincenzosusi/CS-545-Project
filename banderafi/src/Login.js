import React, { useState, useEffect } from 'react';
import './App.css';

function Login() {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"/>
                </label>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;