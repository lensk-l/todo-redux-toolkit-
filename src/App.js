import './App.css';
import {useState} from "react";
import InputField from "./components/inputField";
import TodoList from "./components/todoList";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";

function App() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo({text}));
        setText('')
    }

    return (
        <div className="App">
            <h1>Make your task list</h1>
            <InputField text={text} addTodo={addTask} setText={setText}/>
            <TodoList/>
        </div>
    );
}

export default App;
