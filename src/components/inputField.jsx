import React from "react";

const InputField = ({text, setText, addTodo}) => {
    return <div className='formblock'>
        <input className='addtask' value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addTodo}> Add task</button>
    </div>
}

export default InputField