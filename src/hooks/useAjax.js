import { useState, useEffect } from 'react';

import axios from 'axios';

//how would you config this file to use CORS, instead of having the CORS specification in the api-server file?


const useAjax = (url) => {

  const [data, setData] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);


  useEffect(() => {

    const getData = async () => {

      setIsLoading(true);

      const response = await axios.get(url);

      console.log('-----RESPONSE IN USEAJAX:', response.data);
  
      setData(response.data.results);

      setIsLoading(false);

    };
    
    getData();

  }, []);

  console.log('data in USEAJAX', data);
  return { 
    data,
    setData,
    isLoading };
  

};

export default useAjax;
