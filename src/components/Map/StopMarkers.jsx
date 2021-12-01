import PropTypes from 'prop-types';

import StopMarker from "./StopMarker";
import {
  goStopMarker,
  goBusNearStopMarker,
  backStopMarker,
  backBusNearStopMarker,
} from "./Icon";

export default function StopMarkers({ stops, direction }) {
  const busNearStopMarker =
    direction === 0 ? goBusNearStopMarker : backBusNearStopMarker;
  const stopMarker = direction === 0 ? goStopMarker : backStopMarker;
  const className = direction === 0 ? "goMarker" : "backMarker";

  return (
    <>
      {stops.map((stop, index) => {
        return stop?.A2EventType === 1 ? (
          <StopMarker
            key={index}
            stop={stop}
            icon={busNearStopMarker}
            className={className}
          />
        ) : (
          <StopMarker
            key={index}
            stop={stop}
            icon={stopMarker}
            className={className}
          />
        );
      })}
    </>
  );
};

StopMarkers.propTypes = {
  stops: PropTypes.array, 
  direction: PropTypes.number 
}