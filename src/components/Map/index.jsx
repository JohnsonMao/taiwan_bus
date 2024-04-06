import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import StopMarkers from "./StopMarkers";
import StationMarkers from "./StationMarkers";
import { PersonMarker, BusMarker } from "./Icon";
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
        map?.setView(center, zoom + 3);
      } else {
        map?.setView(center, zoom);
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
      top={false}
      className="mapContainer"
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/${
          import.meta.env.VITE_MAP_USERNAME
        }/${
          import.meta.env.VITE_MAP_STYLE_ID
        }/tiles/256/{z}/{x}/{y}@2x?access_token=${
          import.meta.env.VITE_MAP_TOKEN
        }`}
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
          {Array.isArray(data[3]) && data[3].map((item) => {
            const { PositionLat, PositionLon } = item.BusPosition;
            const position = [PositionLat, PositionLon];
            return (
              <Marker key={item.PlateNumb} icon={BusMarker} position={position}>
                <Popup>
                  <div>
                    <h3>
                      車牌：{item.PlateNumb}
                      <span className="ms-4">
                        {item.Direction === 0 ? "去程" : "返程"}
                      </span>
                    </h3>
                    <span>行駛速度：{item.Speed} km/h</span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
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
