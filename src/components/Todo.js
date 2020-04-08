import React from 'react'

const Todo = (props) => {

    return (
        <div
        className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
            <li>{props.item.task}</li>
        </div>
    )
}

export default Todo;