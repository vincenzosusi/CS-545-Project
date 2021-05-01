import React from 'react';
import '../App.css';
import flagimg from '../flags_home.png'


function Welcome(){
    return(
        <>
            <spacer type="horizontal" size="150"></spacer>
            <div class="container"><div class="typewriter"><h1>Welcome to Banderafi!</h1></div></div>
            <div class="flagshome">
            <img class='resize_fit_center' src={flagimg} alt="Banderafi Logo"/>
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