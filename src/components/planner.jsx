import React, { Component } from 'react';
import AddTaskContainer from '../containers/AddTaskContainer';
import ShowTasksContainer from '../containers/ShowTasksContainer';

export default class Planner extends Component {
    render() {
        return (
            <div>
                <AddTaskContainer></AddTaskContainer>
                <br />
                <ShowTasksContainer></ShowTasksContainer>
            </div>
        )
    }
}