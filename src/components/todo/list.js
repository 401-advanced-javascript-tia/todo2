import React, { useState } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';


function TodoList(props) {

  console.log('props in list.js:', props);

  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  return (
    <>

    {props.list.map(item => (

      <>
      <br/>

      <Toast key={item._id} show={show} onClose={() => 
        props.handleDelete(item._id)
        //  toggleShow()
         }>
        <Toast.Header>
    
        {item.complete ? 
        <Badge pill variant="danger">Complete</Badge> : 
        <Badge pill variant="success">Pending</Badge>}

        <strong className="mr-auto">&nbsp;&nbsp;{item.assignee}</strong>
    
        </Toast.Header>

        <Toast.Body>
        <strong>
          <span onClick={() => props.handleComplete(item._id)}>{item.text}</span>
        </strong><br/>
        Difficulty: {item.difficulty}
        </Toast.Body>

      </Toast>

      </>

    ))}
  </>

  )


}

export default TodoList;