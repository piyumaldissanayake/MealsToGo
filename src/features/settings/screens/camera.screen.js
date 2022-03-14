import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { Avatar } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text } from "../../../components/typography/typography.component";

import {AuthenticationContext} from '../../../services/authentication/authentication.context';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const AvatarContainer = styled.View`
    z-index: 1000;
    top:35%;
    left:40%;
    min-height:50px;
    min-width:200px;
    position: absolute;
`;


export const CameraScreen = ({ navigation }) => {

  const [hasPermission, setHasPermission] = useState(null);
  

  const { user } = useContext(AuthenticationContext);

  const cameraRef = useRef();

  const savePhoto = async (photo, userid) => {
    try {
      await AsyncStorage.setItem(`@photo-${userid}`, photo.uri);
    } catch (e) {
      console.log("Error Storing Photo",e);
    }
  }

  

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      savePhoto(photo, user.uid);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
        <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
        >
            <TouchableOpacity onPress={snap}>
                <AvatarContainer>
                    <Avatar.Icon size={80} icon="camera" backgroundColor="lighgrey" />
                </AvatarContainer>
            </TouchableOpacity>
        </ProfileCamera>
  );
};