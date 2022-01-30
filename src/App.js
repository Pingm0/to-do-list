import './App.css';
import React,{useState} from "react"

function App() {

  // States ///////////

  const [todoObj,setTodoObj] = useState([])
  const [inputTracker,setinput] = useState("")

  //Handelrs///////////

  const addToList = (e) =>{
    e.preventDefault();
    const myObj = {
      todoitem:inputTracker,
      isChecked:false
    }
    setTodoObj([...todoObj,myObj])
    setinput("")
  }

  const deleteItem = (itemIndex) => {
    const newArr = todoObj.filter((elm,index) => index !== itemIndex)
    setTodoObj(newArr)
  }

  const checkedHandler = (index) => {
    const updatedCheck = todoObj.map((elm,i) => {
      if (index === i){
        const objChange = {...elm, isChecked: !elm.isChecked}
        return objChange
      }
      return elm
    })
    setTodoObj(updatedCheck)
  }

  return (
    <div>
    <div className=" m-auto w-96 pt-10">
      <form onSubmit={addToList}>
        <input value={inputTracker} className='border' type={"test"}  onChange={ (e) => setinput(e.target.value)  } />
        <button className='border p-2 ml-5 bg-sky-500'> Add</button>
      </form>
      <div>
        {
          todoObj.map((item,ind) => (
            <div className=' w-64 flex justify-between '  key={ind} >
              <div  className={item.isChecked ? "cross-text " : null}>
              {item.todoitem}
              <input checked={todoObj[ind].isChecked} className='ml-2' type={"checkbox"} onChange={(e) => checkedHandler(ind) }  />
              </div>
              <button className='border ml-5 pl-2 pr-2' onClick={() => (deleteItem(ind))}>Delete</button>
            </div>
          ))
        }
      </div>
      </div>
      {console.log(todoObj," this is the list")}
    </div>
  );
}

export default App;
