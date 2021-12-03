import PropTypes from "prop-types";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { StationMarker } from "./Icon";

export default function StopMarker({ station }) {
  return (
    <>
      {station.map((station, index) => {
        const { PositionLat, PositionLon } = station.StationPosition;
        return (
          <Marker
            key={index}
            icon={StationMarker}
            position={[PositionLat, PositionLon]}
          >
            <Popup>
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
      })}
    </>
  );
}

StopMarker.propTypes = {
  station: PropTypes.array
};
