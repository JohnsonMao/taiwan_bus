import L from "leaflet";

const goStopMarker = new L.Icon({
  iconUrl: require("../../asset/icon/stop.svg").default,
  iconRetinaUrl: require("../../asset/icon/stop.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon goMarker",
});
const goBusNearStopMarker = new L.Icon({
  iconUrl: require("../../asset/icon/busNearStop.svg").default,
  iconRetinaUrl: require("../../asset/icon/busNearStop.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon goMarker",
});
const backStopMarker = new L.Icon({
  iconUrl: require("../../asset/icon/stop.svg").default,
  iconRetinaUrl: require("../../asset/icon/stop.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon backMarker",
});
const backBusNearStopMarker = new L.Icon({
  iconUrl: require("../../asset/icon/busNearStop.svg").default,
  iconRetinaUrl: require("../../asset/icon/busNearStop.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon backMarker",
});
const StationMarker = new L.Icon({
  iconUrl: require("../../asset/icon/GPS.svg").default,
  iconRetinaUrl: require("../../asset/icon/GPS.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "",
});
const PersonMarker = new L.Icon({
  iconUrl: require("../../asset/icon/GPS.svg").default,
  iconRetinaUrl: require("../../asset/icon/GPS.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(24, 24),
  className: "person",
});
export {
  goStopMarker,
  goBusNearStopMarker,
  backStopMarker,
  backBusNearStopMarker,
  StationMarker,
  PersonMarker,
};
