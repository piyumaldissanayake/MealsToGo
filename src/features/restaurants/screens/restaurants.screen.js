import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import {RestaurantInfoCard} from '../components/restaurant-info-card/restaurant-info-card.component';
import { SafeAreaViewContainer } from '../components/utilities/safe-area.component'

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
  