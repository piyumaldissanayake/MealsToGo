import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';


export const RestaurantInfo = ({ restaurant }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos,
        address,
        openingHours,
        rating,
        isClosedTemporarily
    } = restaurant;

    return(
        <Text>Restaurant Info</Text>
    );
}