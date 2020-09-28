import React, { useState, useContext} from 'react';
import Pagination from 'react-bootstrap/Pagination'

import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

//we want the context, not the provider (like in app.js)
import { SettingsContext } from '../../context/settings/settings-context.js';

// import { LoginContext } from '../../context/auth/context.js';

function TodoList(props) {
  
  const settingsContext = useContext(SettingsContext);
  // const authContext = useContext(LoginContext);



  console.log('props in list.js:', props);


  const [ page, setPage ] = useState(0);

  const list = props.list.filter( item =>  settingsContext.showCompleted ? true : !item.complete);

  const start = settingsContext.maxVisible * page || 0;
  const end = start + settingsContext.maxVisible || list.length;
  const pages = new Array(Math.ceil(list.length / settingsContext.maxVisible)).fill('');

  const displayList = list ? list.slice(start, end) : [];




  return (
    <>

    {displayList.map(item => (


      <>
      <br/>

      <Toast key={item._id} onClose={() => 
        props.handleDelete(item._id)
         }>
        <Toast.Header closeButton>
    
        {item.complete ? 
        <Badge pill variant="danger" onClick={() => props.handleComplete(item._id)}>Complete</Badge> : 
        <Badge pill variant="success" onClick={() => props.handleComplete(item._id)}>Pending</Badge>}

        <strong className="mr-auto">&nbsp;&nbsp;{item.assignee}</strong>
    
        </Toast.Header>

        <Toast.Body>
        <strong>
          <span >{item.text}</span>
        </strong><br/>
        <small style={{display: 'block', textAlign: 'right'}}>Difficulty: {item.difficulty}</small>
        </Toast.Body>

      </Toast>

      </>

    ))}

      <Pagination>
        {
          pages.map( (n, i) => 
            <Pagination.Item key={i+1} onClick={() => setPage(i)}>
              {i+1}
            </Pagination.Item>,
          )
        }
      
      </Pagination>

  </>

  )


}

export default TodoList;