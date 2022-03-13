import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsNavigator } from './restaurants.navigator';
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from '../../features/map/screens/map.screen';

import {RestaurantContextProvider} from '../../services/restaurants/restaurants.context';
import {LocationContextProvider} from '../../services/location/location.context';  
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';


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
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsNavigator} />
      </Tab.Navigator>
    );
  }

export const AppNavigator = () => {

    return(
        <NavigationContainer>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>
                <MyTabs />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </NavigationContainer>
    );

}