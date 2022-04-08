import React from "react";
import {removeTodo, changeStatus} from "../store/todoSlice";
import {useDispatch} from "react-redux";

const TodoItem = ({id, text, status}) => {
    const dispatch = useDispatch();

    return <li key={id}>
        <input type="checkbox" checked={status} onChange={() => dispatch(changeStatus({id}))}/>
        <span className='text'> {text}</span>
        <span onClick={() => dispatch(removeTodo({id}))} className='del'>&times;</span>
    </li>

}
export default TodoItem;