import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './Auth';
import { Redirect } from 'react-router';

const SignOutButton = () => {
    const [user, setUser] = useContext(AuthContext);

    // const signOut = () => {
    //     AuthContext = setContext()
    // }

    function onSignOut () {
        setUser(null);
        localStorage.clear();
    }

    return (
        <div>
            <button id="signout" type='button' onClick={onSignOut}>
                Sign Out
            </button>
        </div> 
    );
};

export default SignOutButton;