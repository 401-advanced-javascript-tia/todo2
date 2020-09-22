import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TodoForm(props) {


  const [item, setItem] = useState({});

  const _handleInputChange = e => {
    setItem( {...item, [e.target.name]: e.target.value } );
    console.log('item in _handleInputChange:', item);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleFormSubmitToSendToList(item);
    setItem({});
  };


  return (
    <Card>
      <Card.Body>

        <Form onSubmit={_handleSubmit}>
          <Form.Group controlId="formBasicItem">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control type="text" name="text" placeholder="Add To Do List Item" onChange={_handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formBasicDifficultyRange">
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control type="range" defaultValue="1" min="1" max="5" name="difficulty" onChange={_handleInputChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicAssignee">
          <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={_handleInputChange} />
          </Form.Group>

          <Button type="submit">Add Item</Button>

        </Form>

      </Card.Body>
    </Card>
  
  );

  
}


export default TodoForm;