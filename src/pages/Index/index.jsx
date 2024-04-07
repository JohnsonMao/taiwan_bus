import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import GpsSvg from "../../asset/icon/GPS.svg?react";
import SearchSvg from "../../asset/icon/search.svg?react";
import LikeSvg from "../../asset/icon/like_light.svg?react";
import Footer from "../../components/Footer";

import "./index.scss";

export default function Index() {
  const links = [
    {
      Icon: GpsSvg,
      title: "附近公車站",
      to: "nearby",
    },
    {
      Icon: SearchSvg,
      title: "查詢公車",
      to: "citybus",
    },
    {
      Icon: LikeSvg,
      title: "我的收藏",
      to: "favorites",
    },
  ];

  return (
    <Container className="position-relative" as="nav">
      <ul className="router">
        {links.map(({ Icon, to, title }) => (
          <li key={to}>
            <Link to={to} className="btn btn-primary fs-3 p-2">
              <Icon />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </Container>
  );
}
