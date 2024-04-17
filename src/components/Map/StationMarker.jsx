import { useState, useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { StationMarker } from "./Icon";

export default function StopMarker({ station, isActive, map }) {

  const { PositionLat, PositionLon } = station.StationPosition;
  
  const [refReady, setRefReady] = useState(false);
  let popupRef = useRef(null);

  useEffect(() => {
    if (refReady && isActive) {
      popupRef.openOn(map)
    }
  }, [refReady, isActive, map])

  return (
    <Marker
      icon={StationMarker}
      position={[PositionLat, PositionLon]}
    >
      <Popup
        ref={(r) => {
          popupRef = r;
          setRefReady(true);
        }}
      >
        <div>
          <h2>{station.StationName.Zh_tw}</h2>
          <h3>{station.StationAddress}</h3>
          <p className="m-0">
            {station.Stops.map((item, index, arr) => {
              const max = arr.length - 1
              if (index !== max) {
                return (item.RouteName.Zh_tw + ', ')
              } else {
                return (item.RouteName.Zh_tw)
              }
            })}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

StopMarker.propTypes = {
  station: PropTypes.object,
  isActive: PropTypes.bool,
  map: PropTypes.object,
};
