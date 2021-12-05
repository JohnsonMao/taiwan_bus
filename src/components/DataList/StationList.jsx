import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../../pages/Layout";
import { keyboard_city } from "../../utils/keyboard_config";

export default function StationList({ data = [] }) {
  const { city, setCity } = useContext(Context);
  const cityIndex = keyboard_city.findIndex(
    (cityObj) => cityObj.CityCode === data[0]?.LocationCityCode
  );

  useEffect(() => {
    if (cityIndex !== -1 && city !== keyboard_city[cityIndex].CityName) {
      setCity(keyboard_city[cityIndex].CityName);
    }
  }, [])

  return (
    <>
      {data.map((station, index) => {
        const { PositionLat, PositionLon } = station.StationPosition;
        return (
          <li
            key={index}
            className="d-flex justify-content-between align-items-center"
            data-centerstr={PositionLat + "-" + PositionLon}
            data-index={index}
          >
            <Link
              to={station.StationID + "-" + station.StationName.Zh_tw}
              data-centerstr={PositionLat + "-" + PositionLon}
              data-index={index}
              className="d-block px-4 py-3"
            >
              <h3 className="fs-1 lh-base text-one-line">
                {station.StationName.Zh_tw}
              </h3>
              <h4 className="fs-3 text-gray-light lh-base text-one-line">
                {station.StationAddress}
              </h4>
              <p className="fs-3 text-light lh-base wb-keep-all m-0">
                {station.Stops.map((item, index, arr) => {
                  const max = arr.length - 1;
                  if (index !== max) {
                    return item.RouteName.Zh_tw + ", ";
                  } else {
                    return item.RouteName.Zh_tw;
                  }
                })}
              </p>
            </Link>
          </li>
        );
      })}
    </>
  );
}

StationList.propTypes = {
  data: PropTypes.array,
};
