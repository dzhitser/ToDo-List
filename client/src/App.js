import React from 'react';
import {useState} from 'react';
//import 'index.css';
import ToDoList from './ToDoList'

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const listItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
  }

  return (
    <div>
      <h1> ToDo List</h1>
      <br />
      <input type="text" placeholder="Введите задание" value={inputList} onChange={itemEvent}/>
      <button onClick={listItems}> + </button>

      <ul>
        <li>
          {
            Items.map((val) => {
             return <ToDoList text={val}/>
            })
          }
          
        </li>
      </ul>
    </div>
  );
}

export default App;
