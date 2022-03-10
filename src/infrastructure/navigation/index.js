import React , {useContext} from 'react';
import 'react-native-gesture-handler';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

import {AuthenticationContext} from '../../services/authentication/authentication.context';

export const Navigation = () => {

    const {isAuthenticated} = useContext(AuthenticationContext);

    return(isAuthenticated ? <AppNavigator />: <AccountNavigator />);
}