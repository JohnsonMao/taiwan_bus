import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import LikeFillSvg from "../../asset/icon/like_fill.svg";
import LikeSvg from "../../asset/icon/like.svg";

export default function RouteList({ data = [], favorites = [] }) {
  data.forEach((item) => {
    item.favorite = false;
  });
  favorites.forEach((like) => {
    const index = data.findIndex((item) => item?.RouteUID === like.RouteUID);
    if (index !== -1) {
      data[index].favorite = true;
    }
  });

  return (
    <>
      {data.map((item) => (
        <li
          key={item.RouteUID}
          className="d-flex justify-content-between align-items-center"
          data-start={item.DepartureStopNameZh}
          data-end={item.DestinationStopNameZh}
        >
          <Link
            to={"/citybus/" + item.RouteName.Zh_tw}
            className="d-block px-4 py-3"
            data-start={item.DepartureStopNameZh}
            data-end={item.DestinationStopNameZh}
          >
            <h3 className="fs-1 lh-base text-one-line">
              {item.RouteName.Zh_tw}
            </h3>
            <h4
              className="fs-3 text-light lh-base text-one-line"
              data-start={item.DepartureStopNameZh}
              data-end={item.DestinationStopNameZh}
            >
              {item.DepartureStopNameZh}
              <span className="text-primary mx-1">往</span>
              {item.DestinationStopNameZh}
            </h4>
          </Link>
          <button
            type="button"
            className="btn-favorite p-0"
            data-favorite={
              item.RouteUID +
              "&" +
              item.RouteName.Zh_tw +
              "&" +
              item.DepartureStopNameZh +
              "&" +
              item.DestinationStopNameZh
            }
          >
            {item.favorite ? (
              <img
                src={LikeFillSvg}
                className="active d-block py-6 px-5"
                alt="like_off"
              />
            ) : (
              <img src={LikeSvg} className="d-block py-6 px-5" alt="like_off" />
            )}
          </button>
        </li>
      ))}
    </>
  );
}

RouteList.propTypes = {
  data: PropTypes.array,
  favorites: PropTypes.array,
};
