import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './Auth';

const SignOutButton = () => {
    const [user, setUser] = useContext(AuthContext);

    // const signOut = () => {
    //     AuthContext = setContext()
    // }

    return (
        <button id="signout" type='button' onClick={() => setUser(null)}>
            Sign Out
        </button>
    );
};

export default SignOutButton;