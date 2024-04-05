export const ROOT_URL = "https://tdx.transportdata.tw";

const defaultConfig = {
  contentType: "application/json",
};

const createUrl = (pathname, method, source) => {
  const url = `${ROOT_URL}${pathname}`;

  if (method !== "GET") return url;

  const urlSearchParams = new URLSearchParams();

  Object.entries(source || {}).forEach(([key, value]) => {
    if (value !== "" && value != null) {
      urlSearchParams.append(key, String(value));
    }
  });

  return `${url}?${urlSearchParams.toString()}`;
};

const createHttp =
  (method) =>
  async (pathname, source, { contentType } = defaultConfig) => {
    const token = "";
    const requestInit = { method };
    const headers = new Headers();

    // headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", contentType);
    requestInit.headers = headers;

    if (method !== "GET") {
      requestInit.body = JSON.stringify(source);
    }

    try {
      const url = createUrl(pathname, method, source);
      const response = await fetch(url, requestInit);

      if (response.status >= 400) throw response;

      return response.json();
    } catch (error) {
      if (error instanceof Response) {
        throw await error.json();
      }
      throw error;
    }
  };

const http = {
  get: createHttp("GET"),
  post: createHttp("POST"),
};

export default http;
