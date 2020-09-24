import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import axios from 'axios';

import useAjax from '../../hooks/useAjax.js';


import './todo.scss';





function Todo(props) {

  const url = 'http://localhost:3000/api/v1/todos';

  const { data, isLoading, setData } = useAjax(url);

  console.log('++++++DATA FROM AJAX FILE IN TODO.JS', data);


  
  // const [ list, setList ] = useState([]);
  // const [ isLoading, setIsLoading ] = useState(false);
  

  const _addItem = (item) => {

    console.log('item in _addItem in todo.js:', item);

    item._id = Math.random();
    item.complete = false;
    setData([ ...data, item]);

    axios.post(url, {
      text: item.text,
      assignee : item.assignee,
      complete: item.complete,
      difficulty : item.difficulty,
    })

  };


  const _toggleComplete = (id) => {

    let item = data.filter(i => i._id === id)[0] || {};

    console.log('ITEM IN TOGGLECOMPLETE:::::', item);

    
    if (item._id) {

      item.complete = !item.complete;

      axios.put(`${url}/${item._id}`, {
      text: item.text,
      assignee : item.assignee,
      complete: item.complete,
      difficulty : item.difficulty,
    })

      let updatedList = data.map(listItem => listItem._id === item._id ? item : listItem);
      setData(updatedList);
    }

  };

  const _deleteItem =  async (id)  =>  {


    console.log('^^^^^^^^^ MADE IT TO DELETE ITEM:', id);

    // let deletedItemRes = await 
    axios.delete(`${url}/${id}`);

    console.log('------ WHATS DONE IS DONE --------');
    // console.log('DELETED ITEM RESPONSE: ', deletedItemRes);
    console.log('@@@@@ data:', data);
    
    // ------the following works to remove the words from the relevant Toast, but it doesnt delete the actual Toast from the page

    // let item = data.filter(i => i._id === id)[0] || {};

    // console.log('^^^^^^^ item:', item);


    // for(let i = 0; i < data.length; i++){

    //   if(data[i]._id === id){
    //     data.splice(i, 1);
    //   }
    // }

    // console.log('$$$$$$ DATA AFTER SPLICE', data);

    
    // setData([data]);


  }
  

  console.log('list in todo.js:', data);



  useEffect(() => {
  // document.title = `TITLETOWN`;
  console.log('list in todo.js in useEffect :', data);

  let complete = 0;
  let incomplete = 0;

  data.map(listItem => {
    if(listItem.complete === true) {
      complete = complete + 1;
    } else {
      incomplete = incomplete + 1;
    }
  })

  document.title = `Done: ${complete} - Not Done: ${incomplete}`;

  }, );




  return (
    <>
    <br />
      <Container>


        <Row>

          <Col>
            <header>

              <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                
                  <Navbar.Brand href="#home">
                    To-Do List Manager ( {data.filter(item => !item.complete).length} )
                  </Navbar.Brand>

                </Nav>
              </Navbar>

            </header>
          </Col>

        </Row>

{/* 
          {isLoading && 
            <Row>
              PUT A BOOTSTRAP LOADING INDICATOR HERE
            </Row>
          
          } */}


        <Row>

          <Col sm={4}>
            <div>
            <TodoForm handleFormSubmitToSendToList={_addItem} />
            </div>
          </Col>

          <Col sm={6}>
            <div>
            <TodoList list={data} handleComplete={_toggleComplete} handleDelete={_deleteItem}/>
            </div>
          </Col>

        </Row>


      </Container>

    </>
  );


}





export default Todo;