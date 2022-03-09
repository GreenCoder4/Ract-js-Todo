import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = (prop) => {
    const [list, setlist] = useState([]);


    const todolist=(lists)=>{
       const newlist=[lists, ...list]
        setlist(newlist)
       

    }
    const deleteitem=(a)=>{
        const finaldata=list.filter((value)=>{
            return value.id != a;
        })
        setlist(finaldata)
    }
  
   
  return (
    <>
        <TodoForm onSubmit={todolist}/>
    <div>
        <h1>Task list</h1>
        <div>
        {list.map((value,index)=>{
            return <Todo
            key={index}
            id={value.id}
            task={value.task}
            onSelect={deleteitem}
            />
        })}
    
        </div>
    </div>
    
    </>
    
  )
}

export default TodoList