import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

interface IMapProps {
  initialPosition?: [number, number];
}

const Map: React.FC<IMapProps> = ({ initialPosition }) => (
  <MapContainer
    center={initialPosition || [0, 0]}
    zoom={15}
    style={{ width: '100%', height: '100%' }}
  >
    <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlndWVsNWciLCJhIjoiY2tnYmpvNHp3MGhueTJycXU1cjRuZnR1NiJ9.ykp683SpzbSwoBny0JvydQ" />
  </MapContainer>
);

export default Map;
