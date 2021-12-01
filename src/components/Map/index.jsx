import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
  goStopMarker,
  goBusNearStopMarker,
  backStopMarker,
  backBusNearStopMarker,
} from "./Icon";
import "./map.scss";

const lineColor = {
  color: "#1CC8EE",
};

const StopMarker = ({ stop, icon, className }) => {
  
  const { PositionLat, PositionLon } = stop.StopPosition;

  return (<Marker
            key={stop.StopUID}
            icon={icon}
            position={[PositionLat, PositionLon]}
          >
            <Tooltip
              offset={[0, 0]}
              direction="center"
              opacity={1}
              permanent
              className={className}
            >
              {stop.StopSequence}
            </Tooltip>
            <Popup>
              <div>
                <h2>{stop.StopName.Zh_tw}</h2>
                <span>
                  {stop?.A2EventType === 0
                    ? "離站中"
                    : stop?.A2EventType === 1
                    ? "進站中"
                    : stop.StopStatus === 0
                    ? stop.EstimateTime !== undefined &&
                      Math.floor(stop.EstimateTime / 60) !== 0
                      ? Math.floor(stop.EstimateTime / 60) + " 分"
                      : "1 分內"
                    : "未發車"}
                </span>
              </div>
            </Popup>
          </Marker>
)}

const StopMarkers = ({ stops, direction }) => {
  const busNearStopMarker = direction === 0 ? goBusNearStopMarker : backBusNearStopMarker;
  const stopMarker = direction === 0 ? goStopMarker : backStopMarker;
  const className = direction === 0 ? 'goMarker' : 'backMarker';

  return (<>
    {
      stops.map((stop, index) => {
        return stop?.A2EventType === 1 ? (
          <StopMarker key={index} stop={stop} icon={busNearStopMarker} className={className} />
        ) : (
          <StopMarker key={index} stop={stop} icon={stopMarker} className={className} />
        );
      })
    }
  </>)
}
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
  console.log(position)
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
};
