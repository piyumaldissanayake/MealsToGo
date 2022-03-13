import * as firebase from "firebase";

export const loginRequest = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const RegistrationRequest = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export const LogoutRequest = () => {
    return firebase.auth().signOut();
}