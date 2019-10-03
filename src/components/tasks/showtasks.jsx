import React from 'react';
import { Table } from 'reactstrap';
import TaskItem from './taskitem'
import './addtask.css';

export default function ShowTasks(props) {

    function renderTaskItem(task) {
        return <TaskItem task={task.payload} key={task.id}></TaskItem>;
    }

    return <div className="task-list">
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Task</th>
                    <th></th>
                    <th>Effort</th>
                    <th>Deadline</th>
                </tr>
            </thead>
            <tbody>
                { props.allTodos.map(renderTaskItem) }
            </tbody>
        </Table>
    </div>;
}