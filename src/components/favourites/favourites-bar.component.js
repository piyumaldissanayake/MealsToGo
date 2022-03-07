import React from 'react';
import {ScrollView , TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Text} from '../typography/typography.component';

import { Spacer } from '../spacer/spacer.component';
import {CompactRestaurantInfo} from '../restaurant/compact-restaurant-info.component';

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

export const FavouritesBar = ({favourites, onDetail}) => {
    if(!favourites.length) return null;
    return(
        <FavouritesWrapper >
            <Spacer position="left" size="large" >
                <Text variant='caption' >Favourites</Text>
            </Spacer>
            <ScrollView horizontal='true' showsHorizontalScrollIndicator={false} >
                {
                    favourites.map((favoruiteRestaurant)=>{
                        const key = favoruiteRestaurant.name;
                        <Spacer key={key} position="left" size="medium">
                            <TouchableOpacity onPress={()=>onDetail("Restaurants Detail", {restaurant:favoruiteRestaurant})}>
                                <CompactRestaurantInfo restaurant={favoruiteRestaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    })
                    
                }
            </ScrollView>
        </FavouritesWrapper>
    );
}