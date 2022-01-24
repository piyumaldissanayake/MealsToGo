
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const SafeAreaViewContainer = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight  && `margin-top: ${StatusBar.currentHeight}px `}; /* only for andriod. Does not work in ios */
`;