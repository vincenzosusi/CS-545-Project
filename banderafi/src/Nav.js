import React, {useContext, useState} from 'react';
import './App.css';
import {AuthContext} from './Auth';
import SignOutButton from './SignOut';
import menuicon from './menuicon.png';

function Nav(props){
    const [user, setUser] = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    let {firstName, ...rest} = user;
    let userText;
    let gameText;
    let modifiedNav;
    if (!user){
        //no logged in user
        userText =<li id="usertext">Welcome! <a href='./login'>Log In</a> or <a href='./create-account'>Create an Account</a></li>;
        gameText = <li id="gametext"><a href="/selection">Play as a Guest</a></li>;
        modifiedNav = <>
                <li><a href='/'>Home</a></li>
                <li><a href='./login'>Login</a></li>
                <li><a href='./create-account'>Create Account</a></li>
                <li><a href='/selection'>Play as a Guest</a></li></>
    } else { //can we bring the data forward in a better way?
        userText = <>
        <li className="usertext">Welcome back, {firstName}! </li>
        <li className="usertext"><SignOutButton /></li>
        <li className="usertext"><a href="/results">See Previous Scores</a></li>
        </>;
        gameText = <li id="gametext"><a href="/selection">Play</a> and beat your high score!</li>;
        modifiedNav = <>
        <li><a href='/'>Home</a></li>
        <li><SignOutButton/></li>
        <li><a href='./create-account'>Create Account</a></li>
        <li><a href='/selection'>Play as a Guest</a></li>
    </>;
    }

    return(
        <>
            <ul id="navbar">
                {userText}
                {gameText}
            </ul>
            <div className={open ? "mobileNavbarOpen" : "mobileNavbarClosed"} >
            <img id='menuIcon' src={menuicon} alt='Menu' onClick={()=>setOpen(!open)}></img>
                <a href='/'>Home</a>
                <a href='./login'>Login</a>
                <a href='./create-account'>Create Account</a>
                <a href='/selection'>Play as a Guest</a>
            </div>
        </>
    );
}

export default Nav;