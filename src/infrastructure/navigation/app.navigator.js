import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {  RestaurantsNavigator } from './restaurants.navigator';
import { SettingsScreen } from '../../features/restaurants/screens/settings.screen';
import { MapScreen } from '../../features/restaurants/screens/map.screen';


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
        headerShown: false,
        tabBarIcon: tabBarIcon(iconName),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
    }
}

function MyTabs() {
    return (
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    );
  }

export const AppNavigator = () => {

    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );

}