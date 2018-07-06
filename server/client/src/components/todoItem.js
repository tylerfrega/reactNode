import React from 'react';


const TodoItem = (props) => {
    
    console.log(props, 'tpdpist')
    return (

        <li key= {props.index}>{props.todoItem}</li>
    )
}

export default TodoItem;