const initialState = [{
    id: 1,
    todo: 'drink coffee',
    done: false,
}]

const todoReducer = ( state = initialState, action ) => {
    return state
} 

let todos = todoReducer()