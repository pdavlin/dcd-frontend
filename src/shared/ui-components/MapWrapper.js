import React from "react";
import GoogleMapReact from "google-map-react";

const onGoogleApiLoaded = (map, maps) => {

  // const triangleCoords = [
  //   { lng: -96.012, lat: 41.291 },
  //   { lng: -96.000, lat: 41.251 },
  //   { lng: -95.974, lat: 41.290 },
  //   { lng: -96.012, lat: 41.291 }
  // ];
  const countyBoardDist1Coords = [
    {lng:
      -95.98656177520752,
      lat: 41.205312750991624
    },
    {lng:
      -95.98662614822388,
      lat: 41.2018094609136
    },
    {lng:
      -95.98666906356812,
      lat: 41.19260637708049
    },
    {lng:
      -95.98669052124023,
      lat: 41.19078175238702
    },
    {lng:
      -95.95034122467041,
      lat: 41.19091093102914
    },
    {lng:
      -95.9357714653015,
      lat: 41.19099166755103
    },
    {lng:
      -95.9336256980896,
      lat: 41.190975520254625
    },
    {lng:
      -95.93345403671265,
      lat: 41.191072403973365
    },
    {lng:
      -95.92937707901001,
      lat: 41.19112084577899
    },
    {lng:
      -95.92371225357056,
      lat: 41.1910401094164
    },
    {lng:
      -95.92680215835571,
      lat: 41.19606172166603
    },
    {lng:
      -95.92787504196166,
      lat: 41.20135740982325
    },
    {lng:
      -95.92808961868286,
      lat: 41.20274584252491
    },
    {lng:
      -95.9272527694702,
      lat: 41.20855756665259
    },
    {lng:
      -95.92542886734009,
      lat: 41.21286759532914
    },
    {lng:
      -95.92122316360474,
      lat: 41.2176131411387
    },
    {lng:
      -95.91675996780396,
      lat: 41.22118014448676
    },
    {lng:
      -95.9130048751831,
      lat: 41.22590894853963
    },
    {lng:
      -95.91088056564331,
      lat: 41.231250633231525
    },
    {lng:
      -95.91073036193848,
      lat: 41.2351718943452
    },
    {lng:
      -95.9117817878723,
      lat: 41.240803252922106
    },
    {lng:
      -95.91298341751099,
      lat: 41.2429491730647
    },
    {lng:
      -95.91721057891846,
      lat: 41.2493381120341
    },
    {lng:
      -95.92057943344116,
      lat: 41.25625875762928
    },
    {lng:
      -95.92175960540771,
      lat: 41.25975913130484
    },
    {lng:
      -95.92401266098022,
      lat: 41.25938813284459
    },
    {lng:
      -95.92523574829102,
      lat: 41.25948491525479
    },
    {lng:
      -95.92615842819214,
      lat: 41.25983978286514
    },
    {lng:
      -95.92686653137207,
      lat: 41.25971074032085
    },
    {lng:
      -95.92731714248657,
      lat: 41.259662349300974
    },
    {lng:
      -95.92926979064941,
      lat: 41.259694609984884
    },
    {lng:
      -95.94688653945923,
      lat: 41.25977526162485
    },
    {lng:
      -95.94688653945923,
      lat: 41.26375932865491
    },
    {lng:
      -95.949547290802,
      lat: 41.263775457986945
    },
    {lng:
      -95.95087766647339,
      lat: 41.26388029854803
    },
    {lng:
      -95.95129609107971,
      lat: 41.26396900966056
    },
    {lng:
      -95.9515857696533,
      lat: 41.26411417303931
    },
    {lng:
      -95.95163941383362,
      lat: 41.26422707766635
    },
    {lng:
      -95.9516179561615,
      lat: 41.26560611128558
    },
    {lng:
      -95.9515106678009,
      lat: 41.266904473045244
    },
    {lng:
      -95.95306634902954,
      lat: 41.266904473045244
    },
    {lng:
      -95.95330238342285,
      lat: 41.264065785282256
    },
    {lng:
      -95.95351696014404,
      lat: 41.26314641108562
    },
    {lng:
      -95.95431089401245,
      lat: 41.2612592340248
    },
    {lng:
      -95.95422506332396,
      lat: 41.25974300098081
    },
    {lng:
      -95.9616494178772,
      lat: 41.25974300098081
    },
    {lng:
      -95.96162796020508,
      lat: 41.261743130777795
    },
    {lng:
      -95.96900939941405,
      lat: 41.26177539043385
    },
    {lng:
      -95.96902012825012,
      lat: 41.26116245424394
    },
    {lng:
      -95.973140001297,
      lat: 41.26118664920259
    },
    {lng:
      -95.97516775131226,
      lat: 41.261210844152295
    },
    {lng:
      -95.97517848014832,
      lat: 41.259654284127535
    },
    {lng:
      -95.97577929496765,
      lat: 41.259662349300974
    },
    {lng:
      -95.97583293914795,
      lat: 41.252403290276725
    },
    {lng:
      -95.98302125930786,
      lat: 41.25243555454598
    },
    {lng:
      -95.98303198814392,
      lat: 41.249402643584304
    },
    {lng:
      -95.98324656486511,
      lat: 41.24921711520573
    },
    {lng:
      -95.98326802253723,
      lat: 41.2487653917332
    },
    {lng:
      -95.98541378974915,
      lat: 41.248757325214235
    },
    {lng:
      -95.98542451858519,
      lat: 41.24514342455447
    },
    {lng:
      -95.97579002380371,
      lat: 41.24514342455447
    },
    {lng:
      -95.97585439682007,
      lat: 41.238431364468674
    },
    {lng:
      -95.97870826721191,
      lat: 41.238447500055074
    },
    {lng:
      -95.98012447357178,
      lat: 41.23808444839774
    },
    {lng:
      -95.98181426525116,
      lat: 41.23806831272173
    },
    {lng:
      -95.98184645175934,
      lat: 41.2342521134713
    },
    {lng:
      -95.97347259521484,
      lat: 41.234219840223155
    },
    {lng:
      -95.97345113754272,
      lat: 41.23541393979257
    },
    {lng:
      -95.97104787826538,
      lat: 41.23541393979257
    },
    {lng:
      -95.97108274698256,
      lat: 41.231075139195255
    },
    {lng:
      -95.97103714942932,
      lat: 41.23089964468792
    },
    {lng:
      -95.97065359354019,
      lat: 41.230427622640974
    },
    {lng:
      -95.97058653831482,
      lat: 41.230266246800475
    },
    {lng:
      -95.97055703401566,
      lat: 41.23012302540839
    },
    {lng:
      -95.9705650806427,
      lat: 41.22975992751546
    },
    {lng:
      -95.97192764282227,
      lat: 41.22981439232797
    },
    {lng:
      -95.97244262695312,
      lat: 41.22974984143409
    },
    {lng:
      -95.97294688224792,
      lat: 41.22949163722134
    },
    {lng:
      -95.97325801849364,
      lat: 41.22923343198887
    },
    {lng:
      -95.97349405288696,
      lat: 41.228886467101965
    },
    {lng:
      -95.9736442565918,
      lat: 41.22847494822121
    },
    {lng:
      -95.97392320632933,
      lat: 41.227579280527415
    },
    {lng:
      -95.97432017326355,
      lat: 41.22719196096792
    },
    {lng:
      -95.974942445755,
      lat: 41.226990231122016
    },
    {lng:
      -95.97586512565613,
      lat: 41.226998300327786
    },
    {lng:
      -95.97585439682007,
      lat: 41.22038121720467
    },
    {lng:
      -95.97592949867249,
      lat: 41.218968948135355
    },
    {lng:
      -95.9761655330658,
      lat: 41.21591027229807
    },
    {lng:
      -95.9766697883606,
      lat: 41.209429280751365
    },
    {lng:
      -95.97683072090149,
      lat: 41.20764548298652
    },
    {lng:
      -95.9776246547699,
      lat: 41.20616029299589
    },
    {lng:
      -95.97733497619629,
      lat: 41.20576477475999
    },
    {lng:
      -95.97672343254088,
      lat: 41.20551454770264
    },
    {lng:
      -95.97806453704834,
      lat: 41.20562755358895
    },
    {lng:
      -95.97927689552307,
      lat: 41.205417685359
    },
    {lng:
      -95.980167388916,
      lat: 41.2053531103836
    },
    {lng:
      -95.98656177520752,
      lat: 41.205312750991624
    }
  ]

  // Construct the polygon.
  const omahaTriangle = new maps.Polygon({
    paths: countyBoardDist1Coords,
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