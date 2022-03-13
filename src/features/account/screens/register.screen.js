import React, { useState, useContext } from "react";
import {ScrollView} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer
} from "../components/account.styles.component";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {DismissKeyboardView} from '../../../components/utilities/dismiss-keyboard-view.component';

export const RegisterScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error, successMessage } = useContext(AuthenticationContext);

    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps='handled'
        >
            <AccountBackground>
            <DismissKeyboardView />
            <AccountCover />
            <AccountContainer>
                <AuthInput
                label="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                <AuthInput
                    label="Password"
                    value={repeatedPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setRepeatedPassword(p)}
                />
                </Spacer>
                <Spacer size="large">
                <AuthInput
                    label="Repeat Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    secure
                    onChangeText={(p) => setPassword(p)}
                />
                </Spacer>
                <ErrorContainer>
                {error && (
                    <Spacer size="large">
                    <Text variant="error">{error}</Text>
                    </Spacer>
                )}
                </ErrorContainer>
                <ErrorContainer>
                {successMessage && (
                    <Spacer size="large">
                    <Text variant="label" style={{color: "green"}}>{successMessage}</Text>
                    </Spacer>
                )}
                </ErrorContainer>
                <Spacer size="large">
                {!isLoading ? (<AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => onRegister(email, password, repeatedPassword)}
                >
                    Register
                </AuthButton>) :
                (<ActivityIndicator animating={true} color={Colors.blue300} />)
                }
                </Spacer>
            </AccountContainer>
            <Spacer size="large" />
            <AuthButton
                    icon=""
                    mode="contained"
                    onPress={()=> navigation.goBack()}
                >Back</AuthButton>
            </AccountBackground>
        </ScrollView>
    );
}