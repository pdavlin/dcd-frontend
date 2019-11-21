import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});

/**
 * Creates application context provider to manage state across
 * @const {[number,number]} latLngPair Coordinate pair for a selected location
 * @const {string} inDistrict Location messaging; contains response from backend when valid or error messaging when invalid.
 * @const {boolean} isLoading Loading element state.
 * @returns AppContextProvider component
 */
export const AppContextProvider = (props) => {
    const [latLngPair, setLatLngPair] = useState([41.2570498,-95.9403931]);
    const [inDistrict, setInDistrict] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loadedDistrictData, setLoadedDistrictData] = useState(null);
    const [lastSelectedElectionType, setLastSelectedElectionType] = useState(String(null));
    const [selectedElectionType, setSelectedElectionType] = useState('dcb');
    return <AppContext.Provider value={{
        latLngPair, setLatLngPair, 
        inDistrict, setInDistrict, 
        isLoading, setIsLoading, 
        loadedDistrictData, setLoadedDistrictData, 
        selectedElectionType, setSelectedElectionType, 
        lastSelectedElectionType, setLastSelectedElectionType}} {...props} />;
};
/**
 * Makes AppContextProvider available for use in child function
 */
export const useAppContext = () => {
    return useContext(AppContext);
};