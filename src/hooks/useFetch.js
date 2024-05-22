import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../constants/env";

const useFetch = (endpoint, headers = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${API_URL}/${endpoint}`, { headers })
      .then((resp) => {
        setData(resp.data.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, error, loading, refetch: fetchData };
};

export default useFetch;
