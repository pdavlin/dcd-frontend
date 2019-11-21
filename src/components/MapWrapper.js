import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useAppContext } from './AppContext';
import { pointInPoly } from './Raycaster';

/**
 * Loads default display settings into Google Maps instance.
 * @param maps Google Maps API interface object
 */
const createMapOptions = (maps) => {
  return {
    zoomControlOptions: {
      style: maps.ZoomControlStyle.SMALL
    },
    fullscreenControl: false
  };
}

/**
 * Returns a UI component for Google Maps for display.
 */
const MapWrapper = () => {
  const { latLngPair, setInDistrict, setIsLoading, loadedDistrictData } = useAppContext();
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [locationMarker, setLocationMarker] = useState(null);
  const [displayedPolygonId, setDisplayedPolygonId] = useState(null);
  const [loadedPolygon, setLoadedPolygon] = useState(null);

  useEffect(() => {
    const process = async () => {
      if (latLngPair[0] > 0) {
        addMarker(latLngPair);
        if (maps !== null) {
          await loadPolygonsIntoDistrictData(map, maps);
          setInDistrict(findPointIfInDistrictLayer(maps, latLngPair));
        }
      }
      setIsLoading(false);
    }
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latLngPair])

  // useEffect(() => {
  //   console.log(loadedDistrictData);
  //   if ((map && maps && loadedDistrictData) !== null) {
  //     loadPolygonsIntoDistrictData(map, maps);
  //   }
  // }, [loadedDistrictData])

  /**
   * Adds a marker on the map in Google Maps UI.
   * @param {[number, number]} latLngPair Google Maps coordinates for a user-specified location.
   */
  const addMarker = (latLngPair) => {
    if (locationMarker !== null) {
      locationMarker.setMap(null);
      setLocationMarker(null);
    }
    if ((maps && map) !== null) {
      const newLocationMarker = new maps.Marker({
        position: {
          lat: latLngPair[0],
          lng: latLngPair[1]
        },
        title: 'Hello!'
      });
      newLocationMarker.setMap(map);
      setLocationMarker(newLocationMarker)
    }
  }
  /**
   * 
   * @param maps Google Maps API interface object
   * @param {[number, number]} latLngPair Google Maps coordinates for a user-specified location. 
   */
  const findPointIfInDistrictLayer = (maps, latLngPair) => {
    if (displayedPolygonId !== null) {
      loadedPolygon.setMap(null);
      setDisplayedPolygonId(null);
    }
    for (let district of loadedDistrictData) {
      if (pointInPoly(maps, latLngPair, district.polygon)) {
        district.polygon.setMap(map)
        setDisplayedPolygonId(district.id);
        setLoadedPolygon(district.polygon);
        return district.name;
      }
    }
    console.warn('point not found in district!');
    return null;
  }

  /**
   * Loads initial polygon set from COUNTY_BOARD constant into map instance.
   * @param map Google Maps map instance
   * @param maps Google Maps API interface object
   * @todo When district data is moved to an API call, this will need to be reworked at request time to 
   *       load new polygon data into active district, as needed.
   */
  const loadPolygonsIntoDistrictData = async (map, maps) => {
    for (let district of loadedDistrictData) {
      district.polygon = new maps.Polygon({
        paths: district.coords,
        strokeColor: "#55d6be",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#55d6be",
        fillOpacity: 0.35
      })
      setDisplayedPolygonId(district.id)
    }
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_G_API_KEY }}
      defaultCenter={{
        lat: 41.2701,
        lng: -96.0449
      }}
      options={createMapOptions}
      defaultZoom={12}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={
        ({ map, maps }) => {
          setMap(map)
          setMaps(maps)
        }
      }
    />
  );
};

export default MapWrapper;


