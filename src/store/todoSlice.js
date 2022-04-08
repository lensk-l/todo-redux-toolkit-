import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                status: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        changeStatus(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.status = !toggledTodo.status;
        },
    }
})

export const {addTodo, removeTodo, changeStatus} = todoSlice.actions;

export default todoSlice.reducer;