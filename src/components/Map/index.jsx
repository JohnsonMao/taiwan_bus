import PropTypes from "prop-types";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import StopMarkers from "./StopMarkers";
import StationMarkers from "./StationMarkers";
import "./map.scss";

const lineColor = {
  color: "#1CC8EE",
};

export default function Map({ data, center, setMap, zoom = 14, page }) {
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
      {page === "route" ? (
        <>
          <Polyline
            pathOptions={lineColor}
            className="lineShadow"
            positions={data[2]}
          />
          <StopMarkers stops={data[0]} direction={0} />
          <StopMarkers stops={data[1]} direction={1} />
        </>
      ) : (
        <StationMarkers station={data} />
      )}
    </MapContainer>
  );
}

Map.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.array.isRequired,
  setMap: PropTypes.func.isRequired,
};
