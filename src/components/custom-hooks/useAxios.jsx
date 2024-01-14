import { useState } from "react";
import axios from "axios";

const useAxiosFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    const fetchData = async (url, headers) => {

      const config = {
        method: 'GET',
        url: url,
        headers: headers,
      };


      setIsLoading(true);
      try {
        const {data: response} = await axios(config);
        setApiData(response);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

      return { fetchData, isLoading, apiData, serverError};
}

const useAxiosPost = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  const postData = async (url, body, headers) => {
    setIsLoading(true);
    try {
      const config = {
        method: 'POST',
        url: url,
        headers: headers,
        data: body,
      };

      const { data: response } = await axios(config);
      setApiData(response);
      setIsLoading(false);
    } catch (error) {
      setServerError(error);
      setIsLoading(false);
    }
  };
  
  return { postData, isLoading, apiData, serverError };
}

export {useAxiosFetch, useAxiosPost};