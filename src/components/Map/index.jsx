import { useState } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import StopMarkers from "./StopMarkers";
import "./map.scss";

const lineColor = {
  color: "#1CC8EE",
};

export default function Map({ data, setMap, zoom }) {
  /* 擷取所有站點的中心點 */
  let centerLat = 0;
  let centerLon = 0;
  data[0].forEach((stop) => {
    centerLat += stop.StopPosition.PositionLat;
    centerLon += stop.StopPosition.PositionLon;
  });
  centerLat = centerLat / data[0].length;
  centerLon = centerLon / data[0].length;

  const [position] = useState([centerLat, centerLon]);
  console.log(position);
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      whenCreated={setMap}
      scrollWheelZoom={false}
      className="mapContainer"
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAP_USERNAME}/${process.env.REACT_APP_MAP_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Polyline
        pathOptions={lineColor}
        className="lineShadow"
        positions={data[2]}
      />
      <StopMarkers stops={data[0]} direction={0} />
      <StopMarkers stops={data[1]} direction={1} />
    </MapContainer>
  );
}

Map.propTypes = {
  data: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  setMap: PropTypes.func.isRequired
};
