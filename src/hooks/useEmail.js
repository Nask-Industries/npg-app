import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../apis/email";

const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const headers = {
  type: "Bearer",
  token:
    "mlsn.cdac39984732604f8498939f7e5d9ab078289013da67038edd9140e7fe12dcde",
};

const useEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { type, token } = headers;

  const objectToSearchParams = (obj) => {
    const params = new URLSearchParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params.append(key, obj[key]);
      }
    }
    return params;
  };

  const makeRequest = useCallback(
    async (method, url, data, params, config) => {
      try {
        setIsLoading(true);

        if (params) {
          const queryParams = objectToSearchParams(params).toString();
          url = `${url}?${queryParams}`;
        }

        const response = await api.request({
          method: method,
          ...config,
          url,
          data,
          headers: {
            Authorization: `${type} ${token}`,
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
        });
        return response.data;
      } catch (error) {
        /*if (error.response) {
          const { status } = error.response;
          switch (status) {
            case 403:
            case 405:
            case 500:
              history.push(`/maintenance/${status}`);
              break;
            case 401:
              destroySession();
              if (loginType === "AD") {
                history.push("/auth/ad-login");
              } else {
                history.push("/auth/system-login");
              }
              break;
            default:
              break;
          }

          if (error.message === "Network Error") {
            history.push("/maintenance/offline");
          } 
        } else {
          destroySession();
          history.push("/auth/system-login");
        } */
      } finally {
        setIsLoading(false);
      }
    },
    [token, type]
  );

  const getRequest = (url, params, config) =>
    makeRequest(HttpMethod.GET, url, undefined, params, config);

  const postRequest = (url, data, params, config) =>
    makeRequest(HttpMethod.POST, url, data, params, config);

  const putRequest = (url, data, params, config) =>
    makeRequest(HttpMethod.PUT, url, data, params, config);

  const deleteRequest = (url, params, config) =>
    makeRequest(HttpMethod.DELETE, url, undefined, params, config);

  return { getRequest, postRequest, putRequest, deleteRequest, isLoading };
};

export default useEmail;
