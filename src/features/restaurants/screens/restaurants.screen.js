import React, {useState, useContext} from 'react';
import { FlatList, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Colors } from 'react-native-paper';

import {Search} from '../components/search.component';
import {RestaurantInfoCard} from '../components/restaurant-info-card/restaurant-info-card.component';
import { SafeAreaViewContainer } from '../../../components/utilities/safe-area.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { Text } from '../../../components/typography/typography.component';
import { Spacer } from '../../../components/spacer/spacer.component';

import {LocationContext} from '../../../services/location/location.context';
import {RestaurantContext} from '../../../services/restaurants/restaurants.context';
import {FavouritesContext} from '../../../services/favourites/favourites.context';

import { FadeIn } from '../../../components/animations/fade.animations';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16  }
})``;

const NoRestaurantsText = styled(Text)`
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
    
    const { error: locationError } = useContext(LocationContext);
    const {isLoading, restaurants, error} = useContext(RestaurantContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggled] = useState(false);

    const hasError = (!!error || !!locationError);

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
              {hasError && 
                <Spacer position="left" size="large">
                  <Text variant="error" >Something went wrong retreiving the data</Text>
                </Spacer>
              }
              {!hasError &&
              <RestaurantList
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
              />
            }
        </SafeAreaViewContainer>
    );
}
  