import React from 'react';
import { Button, Table, Card, CardText, CardHeader, Row, Col } from 'reactstrap';
import TaskItem from './taskitem'
import './addtask.css';
import { deleteTodo } from '../../actions';

export default function ShowTasks(props) {

    function renderTaskItem(task) {
        return (
            <center>
            <Card body outline color="secondary" style={{width:"70%"}}>
                <CardText>
                    <Row>
                        <Col xs="auto"><TaskItem task={task.payload} key={task.id}></TaskItem></Col>
                        <Col><Button color="info" className="btn float-right" outline onClick={() => deleteTask(task.id)}>Delete</Button></Col>
                    </Row>
                </CardText>
            </Card>
            <br />
            </center>
        );
    }

    function deleteTask(id) {
        props.dispatch(deleteTodo(id))
    }

    return <div className="task-list">
        <Card inverse color="secondary">
            <CardHeader tag="h3" className="CardTitle">
                <div className="clearfix">
                    All Your Tasks
                </div>
            </CardHeader>
        </Card>
        <br />
        { 
            props.allTodos.map(renderTaskItem) 
        }
    </div>;
}