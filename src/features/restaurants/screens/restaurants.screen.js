import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native';

import {RestaurantInfoCard} from '../components/restaurant-info-card/restaurant-info-card.component';

const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight  && `margin-top: ${StatusBar.currentHeight}px `}; /* only for andriod. Does not work in ios */
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3] };
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16  }
})``;

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
            <RestaurantList
              data={[
                {name: 1},
                {name: 2},
                {name: 3}
              ]}
              renderItem= { ()=> <RestaurantInfoCard /> }
              keyExtractor = {(item) => item.name}
             />   
        </SafeAreaViewContainer>
    );
}
  