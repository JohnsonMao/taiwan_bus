import React, { useState } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { stopMarker, busNearStopMarker } from "./Icon";
import "./map.scss";

const lineColor = {
  color: '#1CC8EE'
}
export default function Map({ data, setMap, zoom, geo }) {

  /* 擷取所有站點的中心點 */
  let centerLat = 0;
  let centerLon = 0;
  data.forEach((stop) => {
    centerLat += stop.StopPosition.PositionLat;
    centerLon += stop.StopPosition.PositionLon;
  });
  centerLat = centerLat / data.length;
  centerLon = centerLon / data.length;

  const [position] = useState([centerLat, centerLon])
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
      <Polyline pathOptions={lineColor} className="lineShadow" positions={geo} />
      {data.map((stop) => {
        const { PositionLat, PositionLon } = stop.StopPosition;
        return (
          stop?.A2EventType === 1 ? (
          <Marker
            key={stop.StopUID}
            icon={busNearStopMarker}
            position={[PositionLat, PositionLon]}
          >
            <Tooltip offset={[0, 0]} direction="center" opacity={1} permanent className="text-dark">
              {stop.StopSequence}
            </Tooltip>
          </Marker>
          ):(
          <Marker
            key={stop.StopUID}
            icon={stopMarker}
            position={[PositionLat, PositionLon]}
          >
            <Tooltip offset={[0, 0]} direction="center" opacity={1} permanent>
              {stop.StopSequence}
            </Tooltip>
            <Popup>
              <div>
                <h2>{stop.StopName.Zh_tw}</h2>
                <span>{
                  stop?.A2EventType === 0
                  ? "離站中"
                  : stop?.A2EventType === 1
                  ? "進站中"
                  : stop.StopStatus === 0
                  ? stop.EstimateTime !== undefined &&
                    Math.floor(stop.EstimateTime / 60) !== 0
                    ? Math.floor(stop.EstimateTime / 60) + " 分"
                    : "1 分內"
                  : "未發車"
                  }</span>
              </div>
            </Popup>
          </Marker>)
        );
      })}
    </MapContainer>
  );
}

Map.propTypes = {
  data: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  geo: PropTypes.array.isRequired,
};
