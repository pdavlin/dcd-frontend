import axios from 'axios';

/**
 * Use Google's Geocoding API to convert an address into a lat/lng pair.
 * @param {string} address 
 */
const getLatLngFromAddress = (address) => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address,
            key: process.env.REACT_APP_G_API_KEY
        }
    })
}

module.exports = {
    getLatLngFromAddress: getLatLngFromAddress
}