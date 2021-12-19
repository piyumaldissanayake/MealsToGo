import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import {RestaurantInfoCard} from '../components/restaurant-info-card.component';

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight  && `margin-top: ${StatusBar.currentHeight}px `}; /* only for andriod. Does not work in ios */
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3] };
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3] };
`;

export const RestaurantsScreen   = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => {
        setSearchQuery(query)
    };

    return(
        <SafeAreaViewContainer>
            <SearchContainer>
                <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeAreaViewContainer>
    );
}
  