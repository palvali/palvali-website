import React, { Component } from 'react';
import AddTaskContainer from '../containers/AddTaskContainer';
import ShowTasksContainer from '../containers/ShowTasksContainer';

export default class Planner extends Component {
    render() {
        return (
            <div>
                <ShowTasksContainer></ShowTasksContainer>
                <br />
                <AddTaskContainer></AddTaskContainer>
            </div>
        )
    }
}