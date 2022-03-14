import React, {useState, useContext} from 'react';
import {List, Avatar} from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {SafeAreaViewContainer} from '../../../components/utilities/safe-area.component';
import { Text } from '../../../components/typography/typography.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};

`;

const AvatarContainer = styled.View`
    align-items: center;
`;

export const SettingsScreen = ({navigation}) => {

    const { user, onLogout } = useContext(AuthenticationContext);
    
    const [profilePhoto, setProfilePhoto] = useState(null);

    const loadPhoto = async (usrid) => {
        try {
          const photoURI = await AsyncStorage.getItem(`@photo-${usrid}`)
          if(photoURI !== null){
            setProfilePhoto(photoURI);
          }
        } catch(e) {
          console.log("Error Loading Photo",e);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            loadPhoto(user.uid);
        }, [user])
    );

    
    return(
        <SafeAreaViewContainer>
            <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                {!profilePhoto && (
                    <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                )}
                {profilePhoto && (
                    <Avatar.Image
                    size={180}
                    source={{ uri: profilePhoto }}
                    backgroundColor="#2182BD"
                    />
                )}
            </TouchableOpacity>
                <Spacer position="top" size="large" >
                    <Text variant="label">
                        {user.email}
                    </Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                title="Favourites"
                description="View your favourites"
                left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                title="Logout"
                left={(props) => <List.Icon {...props} color="black" icon="door" />}
                onPress={onLogout}
                />
            </List.Section>
        </SafeAreaViewContainer>
    );
}
