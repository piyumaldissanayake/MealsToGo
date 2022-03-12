import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

import {loginRequest} from './authentication.service';

export const AuthenticationContext = React.createContext();

export const AuthenticationContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u)=>{
                setUser(u);
                setIsLoading(false);
                setIsAuthenticated(true);
            })
            .catch((error)=>{
                setError(error.toString());
                setIsLoading(false);
                setIsAuthenticated(false);
            });
    }

    return( 
    <AuthenticationContext.Provider
        value={{
            user,
            isLoading,
            isAuthenticated: !!user,
            error,
            onLogin,
        }}
    >
        {children}
    </AuthenticationContext.Provider>);

}