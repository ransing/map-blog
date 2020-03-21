import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

function Map(props) {
    const [cases, setCases] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null)

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/confirmed")
    .then(r => r.json())
    .then(cases => {
      setCases(cases);
      });
    console.log("this is the data", cases);
  }, []);

  const mapOnClick = (Region) => {
    setSelectedRegion(Region)
  }

  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 39, lng: -98 }}
    >
      
      {cases.map(cases => (
          <Marker
                onClick ={() => mapOnClick(cases)}
                key={cases.countryRegion}
                position={{
                lat: parseFloat(cases.lat),
                lng: parseFloat(cases.long)
                }}
            
          />
        )
      )}

      { selectedRegion && (
        < InfoWindow
                position={{
                lat: parseFloat(selectedRegion.lat),
                lng: parseFloat(selectedRegion.long)
                }}
                onCloseClick={() => setSelectedRegion(null) }
        >
          <div>
                <h3 style={{'color': 'red'}}>{selectedRegion.provinceState}, {selectedRegion.countryRegion}</h3>
                <h4 style={{'textSize':"16"}}>Confirmed: {selectedRegion.confirmed}</h4>
          </div>

          </InfoWindow>
      )}
    </GoogleMap>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
