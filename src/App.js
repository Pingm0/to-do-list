import './App.css';
import React,{useState} from "react"
import Todo from './components/Todo'
import ListView from './components/ListView'


function App() {

  // States ///////////

  const [todoObj,setTodoObj] = useState([])

  //Handelrs///////////





  return (
    <div>
    <div className="m-auto w-96 pt-10">
      <Todo todoObj={todoObj} setTodoObj={setTodoObj} />
      <ListView todoObj={todoObj} setTodoObj={setTodoObj} />
      </div>
    </div>
  );
}

export default App;
