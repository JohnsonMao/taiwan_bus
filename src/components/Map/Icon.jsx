import L from "leaflet";

const goStopMarker = new L.Icon({
  iconUrl: "icon/stop.svg",
  iconRetinaUrl: "icon/stop.svg",
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon goMarker",
});
const goBusNearStopMarker = new L.Icon({
  iconUrl: "icon/busNearStop.svg",
  iconRetinaUrl: "icon/busNearStop.svg",
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon goMarker",
});
const backStopMarker = new L.Icon({
  iconUrl: "icon/stop.svg",
  iconRetinaUrl: "icon/stop.svg",
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon backMarker",
});
const backBusNearStopMarker = new L.Icon({
  iconUrl: "icon/busNearStop.svg",
  iconRetinaUrl: "icon/busNearStop.svg",
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon backMarker",
});
const StationMarker = new L.Icon({
  iconUrl: "icon/GPS.svg",
  iconRetinaUrl: "icon/GPS.svg",
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "",
});
const PersonMarker = new L.Icon({
  iconUrl: "icon/GPS.svg",
  iconRetinaUrl: "icon/GPS.svg",
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(24, 24),
  className: "person animation-radar",
});
const BusMarker = new L.Icon({
  iconUrl: "icon/bus.svg",
  iconRetinaUrl: "icon/bus.svg",
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(36, 36),
  className: "bus animation-radar",
});
export {
  goStopMarker,
  goBusNearStopMarker,
  backStopMarker,
  backBusNearStopMarker,
  StationMarker,
  PersonMarker,
  BusMarker,
};
