//"to do" list

let id = 0

//Action types
const ADD_TODO = 'ADD_TODO'

//ACTIONS
export const add = (text) => ({
    type: ADD_TODO,
    text: text
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
        default:
            return state
    }
}

export default todosReducer