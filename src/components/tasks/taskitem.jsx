import React, { Component } from 'react';
import { Button, Badge, Form, Input, Row, ButtonGroup, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { Card, CardHeader, CardBody, Spinner } from 'reactstrap';
import { Table } from 'reactstrap';
import './addtask.css';
import { addTodo } from '../../actions';

export default class TaskItem extends Component {

    constructor (props) {
        super(props);

        this.state = {
            task: {},
            priorityColor: 'info',
            categoryColor: 'info'
        }
    }

    componentDidMount(){
        let task = JSON.parse( this.props.task );
        this.setState({task: task});
        console.log("Parsed "+JSON.stringify(task))
        var priorityColor
        if(task.priority == 'High') {
            priorityColor = 'danger'
        } else if(task.priority == 'Medium') {
            priorityColor = 'warning'
        } else {
            priorityColor = 'info'
        }

        var categoryColor
        if(task.category == 'Work') {
            categoryColor = 'danger'
        } else if(task.category == 'Home') {
            categoryColor = 'warning'
        } else {
            categoryColor = 'info'
        }

        this.setState(state => ({ priorityColor: priorityColor }));
        this.setState(state => ({ categoryColor: categoryColor }));
    } 

    render() {
        return (
            <tr>
                <td>{this.state.task.title}</td>
                <td>
                    <Badge color={this.state.priorityColor} outline>{this.state.task.priority}</Badge>
                    &nbsp;&nbsp;
                    <Badge color={this.state.categoryColor} outline>{this.state.task.category}</Badge>
                </td>
                <td>{""+this.state.task.effort}</td>
                <td>{""+this.state.task.deadline}</td>
            </tr>
        )
    }
}