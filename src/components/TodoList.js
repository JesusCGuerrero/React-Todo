import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {

    console.log(props.list)

    return (
        <div>
            <h1>To Do List:</h1>
            {props.list.map((item) => {
                return <Todo 
                key={item.id}
                item={item}
                toggleItem={props.toggleItem}
                />
            })}
            <br/>
            <button className="clearBtn" onClick={props.clearTask}>
            Clear Completed
            </button>
            <br/>
            <br/>
        </div>
        )
}

export default TodoList;