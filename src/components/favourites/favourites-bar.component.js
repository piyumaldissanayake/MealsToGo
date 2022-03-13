import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/typography.component";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

import { FadeIn } from '../animations/fade.animations';

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onDetail }) => {
  if (!favourites.length) {
    return null;
  }
  return (
      <FavouritesWrapper>
        <Spacer variant="left.large">
          <Text variant="caption">Favourites</Text>
        </Spacer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favourites.map((restaurant) => {
              const key = restaurant.name;
              return (
                <Spacer key={key} position="left" size="medium">
                  <TouchableOpacity
                    onPress={() =>
                      onDetail("Restaurants Detail", {
                        restaurant,
                      })
                    }
                  >
                    <FadeIn>
                      <CompactRestaurantInfo restaurant={restaurant} />
                    </FadeIn>
                  </TouchableOpacity>
                </Spacer>
              );
            })}
          </ScrollView>
      </FavouritesWrapper>
  );
};