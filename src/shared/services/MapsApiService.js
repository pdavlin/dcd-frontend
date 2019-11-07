import axios from 'axios';


/**
 * Use Google's Geocoding API to convert an address into a lat/lng pair.
 * @param {string} address 
 */
 export const getLatLngFromAddress = async (address) => {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: address + ' Omaha NE',
            key: process.env.REACT_APP_G_API_KEY
        }
    })
}
