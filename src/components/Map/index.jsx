import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import StopMarkers from "./StopMarkers";
import StationMarkers from "./StationMarkers";
import { PersonMarker } from "./Icon";
import "./map.scss";

const lineColor = {
  color: "#1CC8EE",
};

export default function Map({
  data,
  index,
  center,
  person,
  map,
  setMap,
  zoom = 14,
  page,
}) {
  useEffect(() => {
    const delay = setTimeout(() => {
      if (index !== "noIndex") {
        map.setView(center, zoom + 3);
      } else {
        map.setView(center, zoom);
      }
    }, 0);
    return () => {
      clearTimeout(delay);
    };
  }, [map, center, zoom, index]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      whenCreated={setMap}
      scrollWheelZoom={false}
      className="mapContainer"
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAP_USERNAME}/${process.env.REACT_APP_MAP_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      {person[0] === null ? null : (
        <Marker icon={PersonMarker} position={person}></Marker>
      )}
      {page === "route" ? (
        <>
          <Polyline
            pathOptions={lineColor}
            className="lineShadow"
            positions={data[2]}
          />
          <StopMarkers
            stops={data[0]}
            direction={0}
            activeIndex={index}
            map={map}
          />
          <StopMarkers
            stops={data[1]}
            direction={1}
            activeIndex={index}
            map={map}
          />
        </>
      ) : (
        <StationMarkers stations={data} activeIndex={index} map={map} />
      )}
    </MapContainer>
  );
}

Map.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.array.isRequired,
  person: PropTypes.array.isRequired,
  setMap: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  map: PropTypes.object,
};
