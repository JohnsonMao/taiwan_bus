import jsSHA from "jssha/dist/sha1";

export default function getAuthorizationHeader() {
    let AppID = process.env.REACT_APP_TDX_ID;
    let AppKey = process.env.REACT_APP_TDX_KEY;
    let GMTString = new Date().toGMTString();
    
    let ShaObj = new jsSHA('SHA-1', 'TEXT', {
        hmacKey: { value: AppKey, format: "TEXT" },
    });
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = `
      hmac username="${AppID}",
      algorithm="hmac-sha1",
      headers="x-date",
      signature="${HMAC}"
    `;
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}