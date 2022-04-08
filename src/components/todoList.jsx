import React from "react";
import TodoItem from "./todoItem";
import {useSelector} from "react-redux";

const TodoList = () => {
    const todos = useSelector(state => state.todosRed.todos)
    return (<ul>
        {
            todos.map((item) => (
                <TodoItem key={item.id} {...item}/>
            ))
        }
    </ul>)
}

export default TodoList;