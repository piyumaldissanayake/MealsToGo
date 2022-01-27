import React, {useState, createContext, useEffect, useMemo} from 'react';

import {restaurantsRequest, restaurantsTransform} from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {


    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retreiveRestaurants = () =>{
        setIsLoading(true);
        setTimeout(()=>{
            restaurantsRequest().then(restaurantsTransform).then((transforedResult)=>{
                setIsLoading(false);
                setRestaurants(transforedResult);
            }).catch( (error) => {
                setIsLoading(false);
                setError(error);
                
            });
        }, 2000);
    }

    useEffect(()=>{
        retreiveRestaurants();
    }, []);

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
