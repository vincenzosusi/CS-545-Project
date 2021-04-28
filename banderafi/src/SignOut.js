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
        <button id="signout" type='button' onClick={() => {setUser(null); localStorage.clear(); window.location.href='/'}}>
            Sign Out
        </button>
    );
};

export default SignOutButton;