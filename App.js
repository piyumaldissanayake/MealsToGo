import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { StatusBar as ExpoStatusBar, } from 'expo-status-bar';
import {ThemeProvider} from 'styled-components/native'
// import AppLoading from 'expo-app-loading';

import * as firebase from "firebase";

import { Navigation } from './src/infrastructure/navigation/index';


import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme/index'

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';


const firebaseConfig = {
  apiKey: "AIzaSyArs94h41Ij-kMoWD5jNi4pJWKhLnZJlYg",
  authDomain: "mealstogo-cbd5b.firebaseapp.com",
  projectId: "mealstogo-cbd5b",
  storageBucket: "mealstogo-cbd5b.appspot.com",
  messagingSenderId: "875779438338",
  appId: "1:875779438338:web:3341e76ef052b33057f41b"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });
  if (!oswaldLoaded || latoLoaded) {
    //return null;
  }
    return (
      <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
    );
  //}
}

