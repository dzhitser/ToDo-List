import React from 'react';
import {useState} from 'react';
import '../src/index.css';
import ToDoList from './ToDoList';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';


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
      <h3> ToDo List</h3>
        <div className="row">
          <div className="input-field col s6">
           <div className="but-inp">
            
            <input value={inputList}  onChange={itemEvent} id="first_name2" type="text" className="validate"/>
            &nbsp;<button onClick={listItems}> + </button>
            {/* <label class="active" for="first_name2">Введите задание</label> */}
            </div> 
          </div>
        </div>
      <br />


      {/* <input type="text" placeholder="Введите задание" value={inputList} onChange={itemEvent}/> */}


      

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
