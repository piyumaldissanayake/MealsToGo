import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {AccountScreen} from '../../features/account/screens/account.screen';
import {LoginScreen} from '../../features/account/screens/login.screen';
import {RegisterScreen} from '../../features/account/screens/register.screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {

    const createScreenOptions = ({route}) => {
        return{
            headerShown: false,
        }
    }

    function MyStacks() {
        return (
            <Stack.Navigator screenOptions={createScreenOptions}>
                <Stack.Screen name="Main" component={AccountScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        );
      }

    return(
        <NavigationContainer>
            <MyStacks />
        </NavigationContainer>
    );
}