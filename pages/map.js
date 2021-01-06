import mapboxgl from 'mapbox-gl'
import ReactMapGL from 'react-map-gl';
const MAPBOX_TOKEN = 'pk.eyJ1IjoidmlqYXkxMzE5NCIsImEiOiJja2pjcHE1enkwa2dkMnpwMmJ2amFpejNiIn0.dJCN0NvDr4rNW6UhoML4lA';
import  React, {useState} from 'react';
import MapGL , {Marker, Popup} from 'react-map-gl';

const markerList = [
  {
    lat: 17.441013,
    long: 78.391796,
    name: "ABC Hospitals",
    info: 10
  },
  {
    lat: 17.442889,
    long: 78.396873,
    name: "XYZ Hospitals",
    info: 20
  },
  {
    lat: 17.441681,
    long: 78.394357,
    name: "NRI Hospitals",
    info: 10
  }
];
const map = () => {
    const [viewport, setViewport] = useState({
        latitude: 19.07,
        longitude: 72.87,
        zoom: 14,
        bearing: 0,
        pitch: 0
      });
    const [showPopup, setShowPopup] =useState(true)
    return (
        <div>
          <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
         <Marker latitude={19.07} longitude={72.87} offsetLeft={-20} offsetTop={-10}
         >
         {showPopup && <Popup
          latitude={19.07}
          longitude={72.87}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(true)}
          anchor="top" >
          <div>You are here</div>
        </Popup>}
        <div>You are here</div>
        </Marker> 
        {showPopup && <Popup
          latitude={19.07}
          longitude={72.87}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="top" >
          <div>You are here</div>
        </Popup>}
    </MapGL>
        </div>
    )
}

export default map
