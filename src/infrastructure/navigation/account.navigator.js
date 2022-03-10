import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {AccountScreen} from '../../features/account/screens/account.screen';
import {LoginScreen} from '../../features/account/screens/login.screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {

    function MyStacks() {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Main" component={AccountScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        );
      }

    return(
        <NavigationContainer>
            <MyStacks />
        </NavigationContainer>
    );
}