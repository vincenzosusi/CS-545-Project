import React from 'react';
import '../App.css';
import logo from '../banderafi.png'


function Welcome(){
    return(
        <>
            <h1>Welcome to Banderafi!</h1>
            <img src={logo} alt="Banderafi Logo"/>
            <ul id="welcome">
            <li><a href='./create-account'>Create Account</a></li>
            <li><a href='./login'>Log In</a></li>
            <li><a href='./selection'>Play as a guest</a></li>
            </ul>
            
        </>

    );
}

export default Welcome;