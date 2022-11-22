import React from "react";


function TodoItem(props){

    return(
        <div className="todo_item">
            {props.item}
        </div>
    )
}

export default TodoItem