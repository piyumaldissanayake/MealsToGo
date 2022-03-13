import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthenticationContext} from '../../services/authentication/authentication.context';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {

  const { user } = useContext(AuthenticationContext);

  const [favourites, setFavourites] = useState([]);
  
  const saveFavourites = async (value, userid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${userid}`, jsonValue);
    } catch (e) {
      console.log("Error Storing Favourites",e);
    }
  }

  const loadFavourites = async (usrid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favourites-${usrid}`)
      if(jsonValue !== null){
        setFavourites(JSON.parse(jsonValue));
      }
    } catch(e) {
      console.log("Error Loading Favourites",e);
    }
  }

  const add = (restaurant) => {
    console.log("add Favourite");
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => {
      return x.placeId !== restaurant.placeId });
    setFavourites(newFavourites);
  };

  const isFavourite = (restaurant) => favourites.find((r) => r.placeId === restaurant.placeId);

  // at the component load and when the user changes, load the favourites
  useEffect(()=>{
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  // whenever favourites and user changes we save favourites
  useEffect(()=>{
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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