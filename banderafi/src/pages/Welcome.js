import React from 'react';
import '../App.css';

function Welcome(){
    return(
        <>
            <h1>Welcome to Banderafi!</h1>
            <ul id="welcome">
            <li><a href='./create-account'>Create Account</a></li>
            <li><a href='./login'>Log In</a></li>
            <li><a href='./play'>Play as a guest</a></li>
            </ul>
            
        </>

    );
}

export default Welcome;