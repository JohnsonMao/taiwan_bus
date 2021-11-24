import getAuthorizationHeader from "./getAuthorizationHeader";

export default function ajax(url, data = {}) {
  let paramStr = "";
  Object.keys(data).forEach((key) => {
    paramStr += key + "=" + data[key].toString() + "&";
  });
  paramStr += "$format=JSON";

  return fetch(url + "?" + paramStr, {
    headers: getAuthorizationHeader(),
  }).then((res) => {
    return res.json();
  });
}
