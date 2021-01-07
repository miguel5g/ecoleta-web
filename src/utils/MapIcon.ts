import { Icon } from 'leaflet';

const MapIcon = new Icon({
  iconUrl: './map-pin.svg',

  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [18, 0],
});

export default MapIcon;
