import React, { useEffect, useState, useCallback } from 'react';

import Header from '../header.js';
import TodoForm from './form.js';
import TodoList from './list.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';

import useAjax from '../../hooks/useAjax.js';


import './todo.scss';

// import { SettingsContext } from '../../context/settings/settings-context.js';

// import Auth from '../../context/auth/auth.js';
// import Login from '../../context/auth/login.js'


const url = 'http://localhost:3000/api/v1/todos';



function Todo(props) {
  
  // const context = useContext(SettingsContext);

  const { request, response, isLoading } = useAjax();

  const [ list, setList ] = useState([]);


  console.log('++++++LIST FROM AJAX FILE IN TODO.JS', list);
  



  const _addItem = async (item) => {

    console.log('item in _addItem in todo.js:', item);


    const options = {
      method: 'post',
      url: url,
      data: item,
    };

    request(options);

  };



  const _deleteItem =  async (id)  =>  {

    const options = {
      method: 'delete',
      url: `${url}/${id}`,
    };

    request(options);

  }



  const _toggleComplete = (id) => {

    let item = list.filter(i => i._id === id)[0] || {};

    console.log('ITEM IN TOGGLECOMPLETE:::::', item);

    
    if (item._id) {

      const options = {
        method: 'put',
        url: `${url}/${item._id}`,
        data: {complete: !item.complete},
      }

      request(options);
    }

  };

  

  useEffect(() => {

  let complete = list.filter(item => item.complete).length;
  let incomplete = list.filter(item => !item.complete).length;
  document.title = `Done: ${complete} - Not Done: ${incomplete}`;

  }, );


  const getToDoList = useCallback( async () => {

    const options = {
      method: 'get',
      url: url,
    };

    request(options);

  }, [request]);






  useEffect(() => {

    if(response.results) {

      response.results && setList(response.results);

    } else {

      getToDoList();

    }

  }, [response, getToDoList, setList]);





  useEffect(() => {
    getToDoList();
  }, [getToDoList]);




  return (
    <>
    <br />
      {/* <Auth> */}
        
          <Header />

      {/* </Auth> */}

      <Container>


        <Row>

          <Col>
            <header>

              <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                
                  <Navbar.Brand href="#home">
                    To-Do List Manager ( {list.filter(item => !item.complete).length} )
                  </Navbar.Brand>

                </Nav>
              </Navbar>

            </header>
          </Col>

        </Row>


        <Row>

          <Col sm={4}>
            <div>
              {/* <Auth> */}

              <TodoForm handleFormSubmitToSendToList={_addItem} />

              {/* </Auth> */}
            </div>
          </Col>

          <Col sm={8}>
            <div>
              {isLoading && 
              <Row>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Row>
            
              }

              {/* <Auth> */}

                <TodoList list={list} handleComplete={_toggleComplete} handleDelete={_deleteItem}/>

              {/* </Auth> */}
            </div>
          </Col>

        </Row>


      </Container>

    </>
  );


}





export default Todo;