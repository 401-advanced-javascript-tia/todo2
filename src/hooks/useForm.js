import { useState } from 'react';

const useForm = (callback) => {

  const [ values, setValues ] = useState({});

  const handleInputChange = (event) => {
    event.persist();
    setValues( {...values, [event.target.name]: event.target.value });
    console.log('values in inputChange in form hook:', values);
  };


  const handleSubmit = (event) => {

    event.preventDefault();
    event.target.reset();
    callback(values);

  };

  return [
    handleInputChange,
    handleSubmit,
    values,
  ];


};

export default useForm;
