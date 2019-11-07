import React from "react";
import GoogleMapReact from "google-map-react";

const onGoogleApiLoaded = (map, maps) => {

  const triangleCoords = [
    { lng: -96.012, lat: 41.291 },
    { lng: -96.000, lat: 41.251 },
    { lng: -95.974, lat: 41.290 },
    { lng: -96.012, lat: 41.291 }
  ];

  // Construct the polygon.
  const omahaTriangle = new maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35
  });
  omahaTriangle.setMap(map);
};

const MapWrapper = () => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.REACT_APP_G_API_KEY }}
    defaultCenter={{
      lat: 41.2701,
      lng: -96.0449
    }}
    defaultZoom={12}
    yesIWantToUseGoogleMapApiInternals
    onGoogleApiLoaded={({ map, maps }) => onGoogleApiLoaded(map, maps)}
  />
);

export default MapWrapper;
