import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import useForm from '../../hooks/form.js';


function TodoForm(props) {


  // const [item, setItem] = useState({});

  const [formData, setFormData] = useState({});

  const [handleInputChange, handleSubmit, values] = useForm(callback);

  function callback(name) {
    setFormData(name);
    console.log('formData in callback', formData);
    props.handleFormSubmitToSendToList(values);
  }

  // const _handleInputChange = e => {
  //   setItem( {...item, [e.target.name]: e.target.value } );
  //   console.log('item in _handleInputChange:', item);
  // };

  // const _handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleFormSubmitToSendToList(item);
  //   setItem({});
  // };


  return (
    <>
    <br />
    <Card>
      <Card.Body>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicItem">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control type="text" name="text" placeholder="Add To Do List Item" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formBasicDifficultyRange">
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control type="range" defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicAssignee">
          <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Group>

          <Button type="submit">Add Item</Button>

        </Form>

      </Card.Body>
    </Card>
  </>
  );

  
}


export default TodoForm;