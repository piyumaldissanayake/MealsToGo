import camelize from "camelize";
import { host, isMock } from '../../components/utilities/env';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
    console.log(`${host}/placesNearby?location=${location}&mock=${isMock}`);
    return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`)
    .then((res)=>{
        return res.json();
    })
    .catch((error) => {
        console.log(error);
        return error;
    });
}

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant)=>{
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
        }
    });
    return camelize(mappedResults);
}