import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED
  } from '../constants/ActionTypes'

const initialState = []

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    payload: action.payload
                }
            ]
        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, payload: action.payload } :
                    todo
                )
        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
                )
        default:
            return state
    }
}