import React, {useState, useContext} from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import {Search} from '../components/search.component';
import {RestaurantInfoCard} from '../components/restaurant-info-card/restaurant-info-card.component';
import { SafeAreaViewContainer } from '../../../components/utilities/safe-area.component';

import {RestaurantContext} from '../../../services/restaurants/restaurants.context';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16  }
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen   = ({ navigation }) => {
    //console.log(props);
    const {isLoading, restaurants} = useContext(RestaurantContext);

    return(
        <SafeAreaViewContainer>
            <Search />
            {isLoading && (
              <LoadingContainer>
                <Loading size={50} animating={true} color={Colors.orange800} />
              </LoadingContainer>
            )}
            <RestaurantList
              data={restaurants}
              renderItem= {({item})=> {
                return(
                  <Pressable 
                    onPress={()=>{
                      navigation.navigate("Restaurants Detail", {restaurant:item});
                      }}>
                    <RestaurantInfoCard restaurant={item}  /> 
                  </Pressable>
                );
              }
             }
              keyExtractor = {(item) => item.name}
             />
        </SafeAreaViewContainer>
    );
}
  