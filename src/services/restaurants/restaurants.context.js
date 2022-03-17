import React, {useState, createContext, useContext , useEffect, useMemo} from 'react';

import {restaurantsRequest, restaurantsTransform} from './restaurants.service';
import {LocationContext} from '../location/location.context';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {


    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {location} = useContext(LocationContext);
    
    const retreiveRestaurants = (locationString) =>{
        setIsLoading(true);
        setRestaurants([]); // clearing out the restaurant data
        restaurantsRequest(locationString).then(restaurantsTransform).then((transforedResult)=>{
            setError(null);
            setIsLoading(false);
            setRestaurants(transforedResult);
        }).catch( (error) => {
            setIsLoading(false);
            setError(error);
            
        });
    }

    useEffect(()=>{
        if(location){
            retreiveRestaurants(location.locationString);
        }
    }, [location]);

    return(
        <RestaurantContext.Provider 
        value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantContext.Provider>
    );
}
