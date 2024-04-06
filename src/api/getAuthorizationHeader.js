import { getStorage, setStorage } from "../utils/localStorage";

export const ROOT_URL = "https://tdx.transportdata.tw";

const TOKEN_KEY = "token";

export default async function getAuthorizationHeader() {
  const time = Date.now();
  const data = getStorage(TOKEN_KEY);

  if (data?.token && data?.time > time - 24 * 60 * 60 * 1000) {
    return data.token;
  }

  const params = new URLSearchParams();

  params.append("grant_type", "client_credentials");
  params.append("client_id", import.meta.env.VITE_CLIENT_ID);
  params.append("client_secret", import.meta.env.VITE_CLIENT_SECRET);

  const response = await fetch(
    `${ROOT_URL}/auth/realms/TDXConnect/protocol/openid-connect/token`,
    {
      method: "POST",
      headers: {
        "Accept-Encoding": "br,gzip",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    }
  );
  const source = await response.json();
  setStorage(TOKEN_KEY, {
    token: source.access_token,
    time,
  });
  return source.access_token;
}
