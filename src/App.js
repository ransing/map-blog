import React from 'react';
import logo from './logo.svg';
import './App.css';
import {WrappedMap} from './Map';


function App() {
  return (
    <div className="App">
      <header >
          <h1 style={{'color':'red'}}>Location of CoronaVirus all around the World</h1>
      </header>
            <div style={{width: '100vw', height: '70vw'}}>
                <WrappedMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
                            loadingElement={<div style={{ height: '100%'}} />}
                            containerElement={<div style={{ height: '100%'}} />}
                            mapElement={<div style={{height: '100%'}} />}
                />
            </div>

    </div>
  );
}

export default App;
