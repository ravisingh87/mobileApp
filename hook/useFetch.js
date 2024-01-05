import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log(RAPID_API_KEY);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res?.data?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, reFetch };
};

export default useFetch;
