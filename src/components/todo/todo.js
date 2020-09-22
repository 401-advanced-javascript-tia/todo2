import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';


function Todo(props) {


  const [ list, setList ] = useState([]);

  const _addItem = (item) => {

    console.log('item in _addItem in todo.js:', item);

    item._id = Math.random();
    item.complete = false;
    setList([ ...list, item]);

  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let updatedList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(updatedList);
    }

  };

  useEffect(() => {

    let defaultList = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];
    
    setList(defaultList);

  }, []);
  
  
  console.log('list in todo.js:', list);



  useEffect(() => {
  // document.title = `TITLETOWN`;
  console.log('list in todo.js in useEffect :', list);

  let complete = 0;
  let incomplete = 0;

  list.map(listItem => {
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
      <section>
        <h2>
        There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </section>

      <section className="todo">

        <div>
          <TodoForm handleFormSubmitToSendToList={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );


}





export default Todo;