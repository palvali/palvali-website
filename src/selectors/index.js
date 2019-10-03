import {createSelector} from 'reselect';
import {SHOW_TODO} from '../constants/ActionTypes';
import Task from '../components/tasks/task.js'

const getTodos = state => state.todos

export const getAllTodos = createSelector(
    [getTodos],
    (todos) => {
        return todos
    }
)

function getAllTasks() {
    var tasks = [];
    for (var i = 0; i < 5; i++) { 
        tasks[i] = createMockTask();
    }
    return tasks;
}

function createMockTask() {
    var id = Math.random().toString(36).substr(2, 5);
    var title = Math.random().toString(36).substr(2, 5);
    var effort = 3;
    var deadline = new Date();
    var priority = "Med";
    var category = "Home";
    return new Task(id, title, effort, deadline, priority, category);
}