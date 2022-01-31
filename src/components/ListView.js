import React,{useState} from 'react'

function ListView (props) { 
    const {todoObj,setTodoObj} = props

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
    
    todoObj.map((item,ind) => (
        <div className=' w-64 flex justify-between '  key={ind} >
        <div  className={item.isChecked ? "cross-text " : null}>
            {item.todoitem}
            <input checked={todoObj[ind].isChecked} className='ml-2' type={"checkbox"} onChange={(e) => checkedHandler(ind) }  />
            </div>
            <button className='border ml-5 pl-2 pr-2' onClick={() => (deleteItem(ind))}>Delete</button>
            </div>
            ))
    

    )
}

export default ListView;