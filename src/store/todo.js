//"to do" list

let id = 0

//Action types
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

//ACTIONS
export const addTodo = (text) => ({
    type: ADD_TODO,
    text: text
})

export const toggleTodo = (todoID) => ({
    type: TOGGLE_TODO,
    id: todoID
})

export const deleteTodo = (todoID) => ({
    type: DELETE_TODO,
    id: todoID
})


const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            id++;
            const newTodo = {
                text: action.text,
                isCompleted: false,
                id
            }
            return [
                ...state,
                newTodo
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (action.id === todo.id ) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
                else {
                    return todo
                }
            })
        case 'DELETE_TODO':
            return state.filter(todo => {
                if (action.id === todo.id) {
                    return false
                }
                else {
                    return true
                }
            })
        default:
            return state
    }
}

export default todosReducer