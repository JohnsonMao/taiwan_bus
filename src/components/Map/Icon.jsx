import L from "leaflet";

const stopMarker = new L.Icon({
  iconUrl: require("../../asset/icon/stop.svg").default,
  iconRetinaUrl: require("../../asset/icon/stop.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon",
})
const busNearStopMarker = new L.Icon({
  iconUrl: require("../../asset/icon/busNearStop.svg").default,
  iconRetinaUrl: require("../../asset/icon/busNearStop.svg").default,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 30),
  className: "stopIcon",
})
export {stopMarker, busNearStopMarker}