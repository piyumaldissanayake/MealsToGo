import React, { useState, useContext } from "react";
import {ScrollView} from 'react-native';
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

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps='handled'
        >
      <DismissKeyboardView />
      <AccountBackground>
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
          <Spacer size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
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
};