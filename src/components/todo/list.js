import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


function TodoList(props) {

  console.log('props in list.js:', props);


  return (
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item action variant={item.complete ? "success" : "danger"} key={item._id}
          // className={`complete-${item.complete.toString()}`}
          // key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text} - {item.assignee}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

}




export default TodoList;