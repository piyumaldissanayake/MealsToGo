import React from 'react';
import {RestaurantInfoCard} from '../../components/restaurant-info-card/restaurant-info-card.component';
import { SafeAreaViewContainer } from '../../components/utilities/safe-area.component'

export const RestaurantsDetailsScreen  = ({ route }) => {
    
  const {restaurant} = route.params;

    return(
        <SafeAreaViewContainer>
            <RestaurantInfoCard restaurant={restaurant}  />
        </SafeAreaViewContainer>
    );
}
  