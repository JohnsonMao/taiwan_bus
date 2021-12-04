import PropTypes from "prop-types";
import "leaflet/dist/leaflet.css";

import StationMarker from "./StationMarker";

export default function StopMarker({ stations, activeIndex, map }) {
  
  return (
    <>
      {stations.map((station, index) => (
        <StationMarker
          key={index}
          station={station}
          isActive={activeIndex === index+''}
          map={map}
        />
      ))}
    </>
  );
}

StopMarker.propTypes = {
  stations: PropTypes.array,
  activeIndex: PropTypes.string,
  map: PropTypes.object,
};
