import React, {useContext} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Login from './pages/Login';
import {AuthContext} from './Auth';
import SignOutButton from './SignOut';

function Nav(props){
    const [user, setUser] = useContext(AuthContext);
    console.log(user);
    let userText;
    let gameText;
    if (!user.data){
        //no logged in user
        userText = <li id="usertext">Welcome! <a href='./login'>Log In</a> or <a href='./create-account'>Create an Account</a></li>;
        gameText = <li id="gametext"><a href="/selection">Play as a Guest</a></li>
    } else { //can we bring the data forward in a better way?
        userText = <>
        <li id="usertext">Welcome back, {user.data.firstName}! <SignOutButton /></li>
        <li><a href="/results">See Previous Scores</a></li>
        </>
        gameText = <li id="gametext"><a href="/selection">Play</a> and beat your high score!</li>
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