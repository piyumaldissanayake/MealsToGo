import React, {useContext} from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Button, Item } from 'react-native';

import {SafeAreaViewContainer} from '../utilities/safe-area.component';

import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const SettingsScreen = () => {

    const { user, onLogout } = useContext(AuthenticationContext);

    return(
        <SafeAreaViewContainer>
            
            <Button title="Logout" onPress={()=>onLogout()} />
               
        </SafeAreaViewContainer>
    );
}
