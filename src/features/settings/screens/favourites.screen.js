import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, Pressable } from 'react-native';

import { RestaurantInfoCard } from '../../../features/restaurants/components/restaurant-info-card/restaurant-info-card.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16  }
})``;

export const FavouritesScreen = ({navigation}) => {

    const { favourites } = useContext(FavouritesContext);

    return(
        <RestaurantList
            data={favourites}
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
    );

}