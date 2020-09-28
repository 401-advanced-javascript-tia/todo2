import { useState, useEffect } from 'react';

import axios from 'axios';

//how would you config this file to use CORS, instead of having the CORS specification in the api-server file?

// USE AXIOS
// MAKE HTTP REQUESTS
// MAKE RESPONSES AVAILABLE


const useAjax = () => {

  const [ options, request ] = useState([]);
  const [ response, setResponse ] = useState({});
  const [ error, setError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);



  useEffect(() => {

    const getData = async () => {

      if(!options) {
        return;
      }

      setIsLoading(true);
      
      try{

        const response = await axios(options);
        setResponse(response.data);
        setIsLoading(false);

      } catch(error) {

        setError(error);

      }

      // const response = await axios.get(url);
      // console.log('-----RESPONSE IN USEAJAX:', response.data);
      // setData(response.data.results);
      // setIsLoading(false);

    };
    
    getData();

  }, [options]);

  console.log('options in USEAJAX', options);

  return { 
    request,
    response,
    error,
    isLoading };
  
};

export default useAjax;
