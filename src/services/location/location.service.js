import camelize from 'camelize';
import { host, isMock } from '../../components/utilities/env';

export const locationRequest = (searchTerm) => {
    console.log(`${host}/geocode?city=${searchTerm}&mock=${isMock}`);
    return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then((res)=>{
        return res.json();
    })
    .catch((error) => {
        return error;
    });
}

export const locationTransform = (result) => {
    console.log(result);
    const {geometry} = camelize(result.results)[0];
    const {lat, lng} = geometry.location;
    return {lat, lng, viewport: geometry.viewport}
}

export const locationTransformForSearch = (locationObject) => {
    const searchFormatLocation = locationObject['lat'] + "," + locationObject['lng'];
    return searchFormatLocation;
}