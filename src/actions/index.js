import * as types from '../constants/ActionTypes'

export const addTodo = payload => ({ type: types.ADD_TODO, payload })
export const editTodo = (id, payload) => ({ type: types.EDIT_TODO, id, payload })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })