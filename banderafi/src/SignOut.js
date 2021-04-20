import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './Auth';

const SignOutButton = () => {
    const signOut = () => {
        AuthContext = setContext()
    }

    return (
        <button type='button' onClick={signOut}>
            Sign Out
        </button>
    );
};

export default SignOutButton;