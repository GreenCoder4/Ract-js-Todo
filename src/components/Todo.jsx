import React from 'react'

import TodoForm from './TodoForm'

const Todo = (prop) => {
    return (
        <div>
           
            <div>
                ID : {prop.id}
                <br/>
                Task : {prop.task}
                <br/>
                <br/>
                <button onClick={()=>{
                    prop.onSelect(prop.id)
                }}> X Delete </button>
                <hr/>
            </div>
        </div>
    )
}

export default Todo
