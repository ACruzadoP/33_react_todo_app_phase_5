import React from "react"

function handleChange() {
    console.log("Cambiado!");
}

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                onChange={handleChange}
                checked={props.item.completed}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem