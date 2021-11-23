import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import './map.scss';

export default function Map() {
  return (
    <MapContainer center={[25.047675, 121.517055]} zoom={15} className="position-absolute top-0 start-0 end-0 bottom-0" >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAP_USERNAME}/${process.env.REACT_APP_MAP_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        attribution='Map data <br/> &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
    </MapContainer>
  )
}
