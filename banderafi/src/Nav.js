import React, {useContext, useState, useEffect} from 'react';
import './App.css';
import {AuthContext} from './Auth';
import SignOutButton from './SignOut';
import menuicon from './menuicon.png';

function Nav(props){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser')));
    const [open, setOpen] = useState(false);
    let userText;
    let gameText;
    let modifiedNav;
    if (!user || !user.data){
        //no logged in user
        userText =<li id="usertext">Welcome! <a href='./login'>Log In</a> or <a href='./create-account'>Create an Account</a></li>;
        gameText = <li id="gametext"><a href="/selection">Play as a Guest</a></li>;
        modifiedNav = <>
                <a href='/'>Home</a>
                <a href='./login'>Login</a>
                <a href='./create-account'>Create Account</a>
                <a href='/selection'>Play as a Guest</a></>
    } else { //can we bring the data forward in a better way?

        userText = <>
        <li className="usertext">Welcome back, {user.data.firstName}! </li>
        <li className="usertext"><SignOutButton /></li>
        <li className="usertext"><a href="/results">See Previous Scores</a></li>
        </>;
        gameText = <li id="gametext"><a href="/selection">Play</a> and beat your high score!</li>;
        modifiedNav = <>
        <a href='/'>Home</a>
        <SignOutButton/>
        <a href='/results'>View High Scores</a>
    </>;
    }

    useEffect(()=> {
        
    }, []);

    return(
        <>
            <ul id="navbar">
                {userText}
                {gameText}
            </ul>
            <div className={open ? "mobileNavbarOpen" : "mobileNavbarClosed"} >
            <img id='menuIcon' src={menuicon} alt='Menu' onClick={()=>setOpen(!open)}></img>
                {modifiedNav}
            </div>
        </>
    );
}

export default Nav;