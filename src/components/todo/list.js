import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function TodoList(props) {

  console.log('props in list.js:', props);


  return (
    <>

    {props.list.map(item => (

      <>
      <br/>
    <Card border="dark" style={{ width: '18rem' }} key={item._id}>
      <Card.Header>

        {item.complete ? 
        <Badge pill variant="danger">Complete</Badge> : 
        <Badge pill variant="success">Pending</Badge>}



        {item.assignee}</Card.Header>
        <Card.Body>
          <Card.Title>
            <span onClick={() => props.handleComplete(item._id)}>{item.text}</span>
          </Card.Title>

          <Card.Text>
            Difficulty: {item.difficulty}
          </Card.Text>

        </Card.Body>
    </Card>
  </>

    ))}
  </>

  )


}

export default TodoList;