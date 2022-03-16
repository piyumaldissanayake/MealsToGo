import React, {useState, useContext} from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import {Search} from '../components/search.component';
import {RestaurantInfoCard} from '../components/restaurant-info-card/restaurant-info-card.component';
import { SafeAreaViewContainer } from '../../../components/utilities/safe-area.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { Text } from '../../../components/typography/typography.component';

import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import {FavouritesContext} from '../../../services/favourites/favourites.context';

import { FadeIn } from '../../../components/animations/fade.animations';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16  }
})``;

const NoFavouritesText = styled(Text)`
    align-items: center;
    justify-content: center;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen   = ({ navigation }) => {
    
    const {isLoading, restaurants} = useContext(RestaurantContext);
    const { favourites } = useContext(FavouritesContext);
    
    const [isToggled, setIsToggled] = useState(false);

    return(
        <SafeAreaViewContainer>
            <Search isFavouritesToggled={isToggled} onFavouritesToggled={()=>setIsToggled(!isToggled)} />
            { isToggled && 
              <FavouritesBar favourites={favourites} onDetail={navigation.navigate} />}
            {isLoading && (
              <LoadingContainer>
                <Loading size={50} animating={true} color={Colors.orange800} />
              </LoadingContainer>
            )}
              {restaurants.length ?
              (<RestaurantList
                data={restaurants}
                renderItem= {({item})=> {
                  return(
                    <Pressable 
                      onPress={()=>{
                        navigation.navigate("Restaurants Detail", {restaurant:item});
                        }}>
                          <FadeIn duration="500" >
                            <RestaurantInfoCard restaurant={item}  /> 
                          </FadeIn>
                    </Pressable>
                  );
                }
              }
                keyExtractor = {(item) => item.name}
              />)
              :   
              (
                  <NoFavouritesText center>No Results for This City Yet</NoFavouritesText>
              )
            }
        </SafeAreaViewContainer>
    );
}
  