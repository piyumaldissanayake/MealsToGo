import React from "react";
import { Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantsDetailsScreen } from "../../features/restaurants/screens/restaurants.details.screen";

const RestaurantStack = createStackNavigator();

const createScreenOptions = ({route}) => {
    return{
        headerShown: false,
        presentation: "modal",
        gestureEnabled: "true",
        animationEnabled: "true"
    }
}

export const RestaurantsNavigator = () => {

    return (
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
        <RestaurantStack.Screen
        name="Restaurants Main Screen"
        component={RestaurantsScreen}
        />
        <RestaurantStack.Screen
        name="Restaurants Detail"
        component={RestaurantsDetailsScreen}
        />
    </RestaurantStack.Navigator>
);
};