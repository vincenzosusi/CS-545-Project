import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Login from './pages/Login';

function Nav(props){
    let userText;
    let gameText;
    if (props.loggedIn == null){
        //no logged in user
        userText = <li id="usertext">Welcome! <a href='./login'>Log In</a> or <a href='./create-account'>Create an Account</a></li>;
        gameText = <li id="gametext"><a href="/play">Play as a Guest</a></li>
    } else {
        userText = <li id="usertext">Welcome back {props.loggedIn.firstName}! </li>
        gameText = <li id="gametext"><a href="/play">Play</a> and beat your high score!</li>
    }
    return(
        <>
            <ul>
                {userText}
                {gameText}
            </ul>
        </>
    );
}

export default Nav;