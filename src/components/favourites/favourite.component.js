import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites, isFavourite } = useContext(FavouritesContext);
  
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite(restaurant)
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite(restaurant) ? "heart" : "hearto"}
        size={24}
        color={isFavourite(restaurant) ? "red" : "white"}
      />
    </FavouriteButton>
  );
};