import { useEffect, useState } from "react";
import Axios from "axios";

export function useAxiosGet(url) {
  // create product state variable
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  // loads data from the API and throws an error message if it fails
  useEffect(() => {
    setRequest({ loading: true, data: null, error: false });
    Axios.get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}
