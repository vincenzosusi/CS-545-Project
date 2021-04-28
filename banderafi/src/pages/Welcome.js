import React from 'react';
import '../App.css';
import logo from '../banderafi.png'


function Welcome(){
    return(
        <>
            <div class="container"><div class="typewriter"><h1>Welcome to Banderafi!</h1></div></div>
            <div class="flagshome"><h1>🇯🇵 🇰🇷 🇩🇪 🇨🇳 🇺🇸 🇫🇷 🇪🇸 🇮🇹 🇷🇺 🇬🇧</h1>
            <p>🤔 log in or play as a guest to test out your flag knowledge! 🤔</p></div>
            {/* <img src={logo} alt="Banderafi Logo"/> */}
            <ul id="welcome">
            <li><a href='./create-account'>Create Account</a></li>
            <li><a href='./login'>Log In</a></li>
            <li><a href='./selection'>Play as a guest</a></li>
            </ul>
            
        </>

    );
}

export default Welcome;