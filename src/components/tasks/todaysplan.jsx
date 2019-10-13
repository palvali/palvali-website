import React from 'react';
import { Table, Jumbotron, Container, Alert } from 'reactstrap';
import { Card, CardText, Row, Col } from 'reactstrap';
import TaskItem from './taskitem'
import Button from '@material-ui/core/Button';
import './addtask.css';

export default function Today(props) {

    function renderMajorTasks(majorTasks, todaysTasks) {
        return (
            <Jumbotron>
                <h3 className="display-6"> 
                    {todaysTasks.length + majorTasks.length} tasks left for the day. 
                </h3>
                <p className="lead">Work on this now-</p>
                {
                    majorTasks.map(renderMajorTask)
                }
            </Jumbotron>
        );
    }

    function renderMajorTask(task) {
        let taskJson = JSON.parse(task.payload);
        return (
            <div className="lead">
            <Alert color="primary">{taskJson.title}</Alert>
            Spend around {taskJson.effort} hours on it. This is a {taskJson.priority} priority task.
            </div>
        );
    }

    function renderOtherTasks(otherTasks) {
        return (
            <p className="siteNav">
                <h3>List of other tasks to complete today. Keep going!</h3>
                <br />
                {
                    otherTasks.map(renderOther)
                }
            </p>
        );
    }

    function renderOther(task) {
        let taskJson = JSON.parse(task.payload);
        return (
            <center>
                <Card body outline color="secondary" style={{width:"70%"}}>
                    <CardText>
                            <TaskItem task={task.payload} key={task.id}></TaskItem>
                    </CardText>
                </Card>
                <br />
            </center>
        );
    }

    const isToday = (someDate) => {
        const today = new Date()
        var parts = someDate.split('-')
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
        return mydate.getDate() == today.getDate() &&
            mydate.getMonth() == today.getMonth() &&
            mydate.getFullYear() == today.getFullYear()
    }

    const filterTodaysTasks = (allTodos) => {
        var todaystasks = allTodos.filter(function(t) {
                        return isToday(JSON.parse(t.payload).deadline);
                    });

        return todaystasks;
    }

    function displayAll(allTodos) {
        let todaysTasks = filterTodaysTasks(props.allTodos)
        let majorTasks = todaysTasks.splice(0, 1)
        return [
            renderMajorTasks(majorTasks, todaysTasks),
            renderOtherTasks(todaysTasks)
        ]
    }

    return <div className="task-list">
        {/* <Jumbotron>
            <h1 className="display-3">Hello, Teja!</h1>
            <p className="lead">Here is your today's plan. Focus! Get things done!</p>
        </Jumbotron> */}
        {
            displayAll(props.allTodos)
        }
    </div>;
}