import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StatusBar as ExpoStatusBar, } from 'expo-status-bar';
import {ThemeProvider} from 'styled-components/native'
// import AppLoading from 'expo-app-loading';

import { Navigation } from './src/infrastructure/navigation/index';


import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme/index'

import {RestaurantContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';  

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
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
    );
  //}
}

