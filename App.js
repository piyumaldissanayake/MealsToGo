import React, {useState} from 'react';
import { StatusBar as ExpoStatusBar, } from 'expo-status-bar';
import {ThemeProvider} from 'styled-components/native'
// import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { SettingsScreen } from './src/features/restaurants/screens/settings.screen';
import { MapScreen } from './src/features/restaurants/screens/map.screen';
import { theme } from './src/infrastructure/theme/index'

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Map:'md-map'
}

const tabBarIcon = (iconName) => ({size, color}) => (
  <Ionicons name={iconName} size={size} color={color} />
);

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICONS[route.name]
  return{
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
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
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
    );
  //}
}

