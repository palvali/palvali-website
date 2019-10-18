import {createSelector} from 'reselect';

const getTodos = state => state.todos

export const getAllTodos = createSelector(
    [getTodos],
    (todos) => {
        return todos
    }
)