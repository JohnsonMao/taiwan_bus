import PropTypes from 'prop-types';
import { Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function StopMarker({ stop, icon, className }) {
  const { PositionLat, PositionLon } = stop.StopPosition;

  return (
    <Marker
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
  );
}

StopMarker.propTypes = {
  stop: PropTypes.object,
  icon: PropTypes.object,
  className: PropTypes.string
}