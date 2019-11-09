import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const [latLngPair, setLatLngPair] = useState([41.2570498,-95.9403931]);
    const [inDistrict, setInDistrict] = useState('');
    return <AppContext.Provider value={{latLngPair, setLatLngPair, inDistrict, setInDistrict}} {...props} />;
};

export const useAppContext = () => {
    return useContext(AppContext);
};