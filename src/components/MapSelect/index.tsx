import React, { useEffect, useState } from 'react';
import {
  MapContainer, Marker, TileLayer, useMapEvents,
} from 'react-leaflet';

import MapIcon from '../../utils/MapIcon';

interface IOnClick {
  (loc: [number, number]): void
}

interface IMapProps {
  initialPosition?: [number, number];
  onClick?: IOnClick;
}

const MarkerLocation: React.FC<{ onClick?: IOnClick }> = ({ onClick }) => {
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>();

  useEffect(() => {
    if (onClick) onClick(selectedPosition);
  }, [selectedPosition]);

  const map = useMapEvents({
    click: (e) => {
      setSelectedPosition([
        e.latlng.lat,
        e.latlng.lng,
      ]);
    },
  });

  return selectedPosition ? <Marker icon={MapIcon} position={selectedPosition} /> : null;
};

const MapSelect: React.FC<IMapProps> = ({ initialPosition, onClick }) => (
  <MapContainer
    center={initialPosition || [-9.611582210984674, -51.62338256835938]}
    zoom={15}
    style={{ width: '100%', height: '100%' }}
  >
    <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWlndWVsNWciLCJhIjoiY2tnYmpvNHp3MGhueTJycXU1cjRuZnR1NiJ9.ykp683SpzbSwoBny0JvydQ" />
    <MarkerLocation onClick={onClick} />
  </MapContainer>
);

export default MapSelect;
