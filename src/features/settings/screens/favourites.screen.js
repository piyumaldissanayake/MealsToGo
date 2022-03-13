import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, Pressable } from 'react-native';

import { RestaurantInfoCard } from '../../../features/restaurants/components/restaurant-info-card/restaurant-info-card.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { SafeAreaViewContainer } from '../../../components/utilities/safe-area.component';
import { Text } from '../../../components/typography/typography.component';
import { FadeIn } from '../../../components/animations/fade.animations';


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16  }
})``;

const NoFavouritesArea = styled(SafeAreaViewContainer)`
    align-items: center;
    justify-content: center;
`;

export const FavouritesScreen = ({navigation}) => {

    const { favourites } = useContext(FavouritesContext);

    return(
        favourites.length ? 
            (
                <SafeAreaViewContainer>
                    <RestaurantList
                        data={favourites}
                        renderItem= {({item})=> {
                            return(
                                <Pressable 
                                    onPress={()=>{
                                        navigation.navigate("Restaurants Detail", {restaurant:item});
                                        }}>
                                    <FadeIn duration="500">
                                        <RestaurantInfoCard restaurant={item}  /> 
                                    </FadeIn>
                                </Pressable>
                            );
                        }}
                        keyExtractor = {(item) => item.name}
                    />
                </SafeAreaViewContainer>
            ) 
            : 
            (
               <NoFavouritesArea>
                   <Text center>No Favourites Yet</Text>
               </NoFavouritesArea> 
            )
    );

}