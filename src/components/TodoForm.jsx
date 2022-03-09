
import React, { useState } from 'react'

const TodoForm = (prop) => {
    const [Name, setName] = useState("");
    const HandelChange=(event)=>{
        setName(event.target.value)
    }
    const HandelSubmit=(event)=>{
        event.preventDefault();
        setName('');
        prop.onSubmit({
            id: Math.floor(Math.random()*10000),
            task: Name
        })
        
    }
  return (
    <>
    <form onSubmit={HandelSubmit}>
        <input 
        type='text'
        name='list'
        value={Name}
        placeholder="Enter Task"
        onChange={HandelChange}
        >
        </input>
        <button>Submit</button>
    </form>
    </>
  )
}

export default TodoForm