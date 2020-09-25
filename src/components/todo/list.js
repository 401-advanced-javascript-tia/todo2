import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

//we want the context, not the provider (like in app.js)
// import { SettingsContext } from '../../context/settings/settings-context.js';

// import { LoginContext } from '../../context/auth/context.js';

function TodoList(props) {
  
  // const settingsContext = useContext(SettingsContext);
  // const authContext = useContext(LoginContext);



  console.log('props in list.js:', props);

  // const [show, setShow] = useState(true);

  // const toggleShow = () => setShow(!show);

  let active = 1;
  let pageItems = [];
  for (let number = 1; number <= 5; number++) {
    pageItems.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


  return (
    <>

    {props.list.map(item => (


      <>
      <br/>

      <Toast key={item._id} onClose={() => 
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

      <Pagination>{pageItems}</Pagination>

  </>

  )


}

export default TodoList;