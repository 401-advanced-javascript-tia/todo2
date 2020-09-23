'use strict';

import { useState } from 'react';

const useForm = (callback) => {

  const [ values, setValues ] = useState({});

  const handleInputChange = (e) => {
    e.persist();
    setValues( {...values, [e.target.name]: e.target.value });
    console.log('values in inputChange in form hook:', values);
  };


  const handleSubmit = (e) => {

    e.preventDefault();
    e.target.reset();
    callback(values);

  };

  return [
    handleInputChange,
    handleSubmit,
    values,
  ];


};

export default useForm;
