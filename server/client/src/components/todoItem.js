import React from 'react';


const TodoItem = (props) => {
    
    return (

        <li key= {props.index}>{props.todoItem}</li>
    )
}

export default TodoItem;