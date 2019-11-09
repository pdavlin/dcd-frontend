import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useAppContext } from './AppContext';
import { COUNTY_BOARD } from './Consts';
import { pointInPoly } from './Raycaster';

const createMapOptions = (maps) => {
  return {
    zoomControlOptions: {
      style: maps.ZoomControlStyle.SMALL
    },
    fullscreenControl: false
  };
}

const MapWrapper = () => {
  const { latLngPair, setInDistrict } = useAppContext();
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [locationMarker, setLocationMarker] = useState(null);
  const [displayedPolygon, setDisplayedPolygon] = useState(null);

  useEffect(() => {
    if (latLngPair[0] > 0) {
      addMarker(latLngPair);
      if (maps !== null) {
        setInDistrict(findPointIfInDistrictLayer(maps, latLngPair));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latLngPair])

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
  const  findPointIfInDistrictLayer = (maps, latLngPair) => {
    // TODO: find a way to remove an existing polygon when a new one is
    // displayed, as needed.
    for (let district of COUNTY_BOARD) {
      if (pointInPoly(maps, latLngPair, district.polygon)) {
        district.polygon.setMap(map)
        return district.name;
      }
    }
    console.log('not found!');
    return null;
  }

  const onGoogleApiLoaded = (map, maps) => {
    for (let district of COUNTY_BOARD) {
      console.log(typeof district)
      district.polygon = new maps.Polygon({
        paths: district.coords,
        strokeColor: "#55d6be",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#55d6be",
        fillOpacity: 0.35
      })
      setDisplayedPolygon(district.id)
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
          onGoogleApiLoaded(map, maps)
        }
      }
    />
  );
};

export default MapWrapper;


