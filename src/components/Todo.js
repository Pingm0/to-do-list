import React,{useState} from 'react'

function Todo (props) {
    const [inputTracker,setinput] = useState("")
    const {todoObj,setTodoObj} = props
    
    const addToList = (e) =>{
        e.preventDefault();
        const myObj = {
        todoitem:inputTracker,
        isChecked:false
        }
        setTodoObj([...todoObj,myObj])
        setinput("")
    }
    
    return (
        <form onSubmit={addToList}>
        <input value={inputTracker} className='border' type={"text"}  onChange={ (e) => setinput(e.target.value)  } />
        <button className='border p-2 ml-5 bg-sky-500'> Add</button>
    </form>
    )
}

export default Todo;