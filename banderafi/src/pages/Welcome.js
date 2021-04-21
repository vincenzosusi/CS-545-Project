import React from 'react';
import '../App.css';

function Welcome(){
    return(
        <>
            <h1>Welcome to Banderafi!</h1>
            <a href='./create-account'>Create Account</a>
            <a href='./login'>Log In</a>
            <a href='./play'>Play as a guest</a>
        </>

    );
}

export default Welcome;