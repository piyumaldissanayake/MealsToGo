import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

import {loginRequest, RegistrationRequest, LogoutRequest} from './authentication.service';

export const AuthenticationContext = React.createContext();

export const AuthenticationContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    firebase.auth().onAuthStateChanged((usr) => {
        if(usr){
            setUser(usr);
            setIsLoading(false);
        }else{
            setIsLoading(false);
        }
    });

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

    const onLogout = () => {
        setUser(null);
        LogoutRequest();
    }

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);
        if(password !== repeatedPassword){
            setError("Error : Passwords confirmation do not match");
            return;
        }
        RegistrationRequest(email, password)
            .then((u) => {
                console.log(u);
                if(u.additionalUserInfo.isNewUser){
                    setSuccessMessage("Registration Successful.");
                    onLogin(email, password);
                }
            })
            .catch((error) => {
                setSuccessMessage(null);
                setError(error.toString());
                setIsLoading(false);
            })
    }

    return( 
    <AuthenticationContext.Provider
        value={{
            user,
            isLoading,
            isAuthenticated: !!user,
            error,
            successMessage,
            onLogin,
            onRegister,
            onLogout
        }}
    >
        {children}
    </AuthenticationContext.Provider>);

}