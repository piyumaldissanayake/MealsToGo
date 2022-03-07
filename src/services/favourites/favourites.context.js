import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  
  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@favourites', jsonValue)
    } catch (e) {
      console.log("Error Storing Favourites",e);
    }
  }

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favourites')
      if(jsonValue !== null){
        setFavourites(JSON.parse(jsonValue));
      }
    } catch(e) {
      console.log("Error Loading Favourites",e);
    }
  }

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => {
      return x.placeId !== restaurant.placeId });
    setFavourites(newFavourites);
  };

  const isFavourite = (restaurant) => favourites.find((r) => r.placeId === restaurant.placeId);

  // at the component load, we load the favourites
  useEffect(()=>{
    loadFavourites();
  }, []);

  // whenever favourites changes we save favourites
  useEffect(()=>{
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
        isFavourite: isFavourite
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};